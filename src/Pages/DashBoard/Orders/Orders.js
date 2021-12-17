
import React from 'react';
import Table from 'react-bootstrap/Table';
import './Orders.css'
import SingleOrder from '../SingleOrder/SingleOrder';
import { useNavigate } from 'react-router-dom';
import useOrder from '../../../hooks/useOrder';


const Orders = () => {

    const navigate = useNavigate();
    const { products } = useOrder();


    const handleCheckOutBtn = () => {
        navigate('/dashboard/checkOut')
    }


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
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => <SingleOrder
                            key={product._id}
                            product={product}
                        ></SingleOrder>
                        )
                    }
                </tbody>
            </Table>
            <button onClick={handleCheckOutBtn} className='checkout-btn'>checkout</button>
        </div >
    );
};

export default Orders;