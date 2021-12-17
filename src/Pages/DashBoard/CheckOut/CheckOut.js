import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import './CheckOut.css'

const CheckOut = () => {

    const { register, handleSubmit, } = useForm();
    const onSubmit = data => {
        console.log(data)
    };

    const [products, setProducts] = useState([])
    const { user } = useAuth();

    useEffect(() => {
        axios.get(`http://localhost:5000/cartProduct/${user.email}`)
            .then(function (response) {
                setProducts(response.data);
            })
    }, [user.email])

    let sum = 0;
    products.forEach(pd => {
        sum += +pd.price
    })

    let shipping = 0
    if (sum < 500) {
        shipping = +sum / (100 * 5);
    }
    else if (sum > 500) {
        shipping = +sum / (100 * 10);
    }
    const total = sum + shipping;


    return (
        <div className='checkout'>
            <Container>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                        <Col lg={6}>
                            <div className="billing-address">
                                <h5>BILLING DETAILS</h5>
                                <label htmlFor="name">Your Name  *</label>
                                <input required id='name' {...register("name", { required: true })} />
                                <label htmlFor="company">Company Name </label>
                                <input id='company' {...register("company", { required: true })} />
                                <label htmlFor="country">Country  *</label>
                                <input required id='country ' {...register("Country")} />
                                <label htmlFor="street">Street address * </label>
                                <input required id='street ' {...register("street", { required: true })} />
                                <label htmlFor="town">Town / City * </label>
                                <input required id='town ' {...register("town", { required: true })} />
                                <label htmlFor="phone">Phone * </label>
                                <input required id='phone' {...register("phone", { required: true })} />
                                <label htmlFor="email">Username or email  *</label>
                                <input required id='email' {...register("email", { required: true })} />
                                <label htmlFor="note">Order Note</label>
                                <input required id='note'  {...register("note")} />
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
                                                <td>{product.name}</td>
                                                <td>${product.price}</td>
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
                                <button type='submit'>Place order</button>
                            </div>
                        </Col>
                    </Row>
                </form>
            </Container>
        </div>
    );
};

export default CheckOut;
