
import React from 'react';
import Table from 'react-bootstrap/Table';
import './Orders.css'
import SingleOrder from '../SingleOrder/SingleOrder';
import { useNavigate } from 'react-router-dom';
import useOrder from '../../../hooks/useOrder';
import { Spinner } from 'react-bootstrap';

const Orders = () => {

    const navigate = useNavigate();
    const { products } = useOrder();


    const handleCheckOutBtn = () => {
        navigate('/dashboard/checkOut')
    }

    let payment = null;

    products.forEach(pd => {
        payment = pd.payment
    })


    return (
        <div className='order-part product-table'>
            <h4>My Orders</h4>
            <Table bordered responsive>
                <thead>
                    <tr>
                        <th>Delete</th>
                        <th>Image</th>
                        <th>Product Name</th>
                        <th>Unit Price</th>
                        <th>status</th>
                        <th>Payment</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.length ? <>{
                            products.map(product => <SingleOrder
                                key={product._id}
                                product={product}
                            ></SingleOrder>
                            )
                        }</> : <Spinner animation="border" variant="primary" />
                    }

                </tbody>
            </Table>
            {
                payment ? <button disabled className='checkout-btn'>checkout</button> : <button onClick={handleCheckOutBtn} className='checkout-btn'>checkout</button>
            }
        </div >
    );
};

export default Orders;