import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import './CheckOut.css'
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { Spinner } from 'react-bootstrap';

const stripePromise = loadStripe('pk_test_51Jvm9zD8Za3ly54iWHHCWbKT3mPVrUzRjFqc4sLXszNuCyJik2OecofEeoACfkEADrsqS8K8LfsM2NOK1VsJwjpN00HZb4icSe')

const CheckOut = () => {



    // const { register, handleSubmit, } = useForm();
    // const onSubmit = data => {
    //     console.log(data)
    // };

    const [products, setProducts] = useState([])
    const { user } = useAuth();

    useEffect(() => {
        axios.get(`http://localhost:5000/cartProduct/${user.email}`)
            .then(function (response) {
                setProducts(response.data);
            })
    }, [user.email])



    let sum = 0;
    let id = null;
    products.forEach(pd => {
        id = pd._id
        if (pd.payment) {
            pd.price = 0;
        } else {
            sum += +pd.price
        }
    })

    let shipping = 0
    if (sum < 500 && sum > 0) {
        shipping = 2;
    }
    else if (sum < 1000 && sum > 500) {
        shipping = 5;
    }
    else if (sum > 1000) {
        shipping = 10;
    }
    const total = sum + shipping;

    return (
        <>
            {
                products.length ? <Elements stripe={stripePromise}>
                    <CheckoutForm
                        total={total}
                        id={id}
                        products={products}
                        sum={sum}
                        shipping={shipping}
                    />
                </Elements> : <Spinner animation="border" />

            }
        </>
    );
};

export default CheckOut;
