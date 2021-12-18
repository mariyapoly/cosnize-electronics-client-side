import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';

import './CheckoutForm.css'
import { Col, Row, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const CheckoutForm = ({ total, id, products, sum, shipping }) => {

    const stripe = useStripe();
    const elements = useElements();
    const price = '' + total
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const { user } = useAuth();


    useEffect(() => {


        axios.post('http://localhost:5000/create-payment-intent', {
            price: price
        })
            .then(function (response) {
                setClientSecret(response.data.clientSecret);
            })
            .catch(function (error) {
                console.log(error);
            });

    }, [price])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setError(error.message);
            setSuccess('')
        } else {

            setError('')
            console.log(paymentMethod);
        }
        // payment Intent
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user.displayName
                    },
                },
            },
        );

        if (intentError) {
            setError(intentError.message)
            setSuccess('')
        } else {
            setError('')
            setSuccess('Your payment proccess successfully')
            console.log(paymentIntent)
        }

        // saved to database

        const payment = {
            amount: paymentIntent?.amount,
            created: paymentIntent?.created,
            last4: paymentMethod?.card?.last4,
            transaction: paymentIntent?.client_secret.slice('_secret')[0]

        }

        axios.put(`http://localhost:5000/cartProduct/${user.email}`, {
            payment: payment
        })
            .then(function (response) {
                if (response.data.acknowledged) {
                    navigate('/dashboard/orders')
                };
            })


    };


    // onSubmit={handleSubmit} 

    return (< div className='checkout'>

        <form onSubmit={handleSubmit}>

            <Row>
                <Col lg={6}>
                    <div className="billing-address">
                        <h5>BILLING DETAILS</h5>
                        <label htmlFor="name">Your Name  *</label>
                        <input required id='name' name='name' />
                        <label htmlFor="company">Company Name </label>
                        <input id='company' />
                        <label htmlFor="country">Country  *</label>
                        <input required id='country ' />
                        <label htmlFor="street">Street address * </label>
                        <input required id='street ' />
                        <label htmlFor="town">Town / City * </label>
                        <input required id='town ' />
                        <label htmlFor="phone">Phone * </label>
                        <input required id='phone' />
                        <label htmlFor="email">Username or email  *</label>
                        <input required id='email' />
                        <label htmlFor="note">Order Note</label>
                        <input required id='note' />
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="order-total">
                        <h5>YOUR ORDER</h5>
                        <Table bordered responsive>
                            <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.map(product => <tr key={product._id}>
                                        {
                                            !product.payment && <>
                                                <td>{product.name}</td>
                                                <td>${product.price}</td>
                                            </>
                                        }

                                    </tr>
                                    )
                                }
                            </tbody>
                        </Table>
                        <div className="cost-total">
                            <div className='sub-total'><p>Cart Subtotal:</p> <span>${sum}</span></div>
                            <div className='sub-total'><p>Shipping:</p> <span>${shipping}</span></div>
                            <div className='sub-total'><p>Order Total:</p> <span>${total}</span></div>
                        </div>
                    </div>
                </Col>
            </Row>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '14px',
                            color: '#666666',
                            '::placeholder': {
                                color: '#666666',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className='payment-btn' type="submit" disabled={!stripe || success}>Place order ${total}
            </button>
            {
                error && <p style={{ color: 'red' }}>{error}</p>
            }
            {
                success && <p style={{ color: 'green' }}>{success}</p>
            }

        </form>
    </div>
    );
};

export default CheckoutForm;