import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from 'react-bootstrap/Table';
import './Orders.css'
import SingleOrder from '../SingleOrder/SingleOrder';


const Orders = () => {

    const [products, setProducts] = useState([])
    const { user } = useAuth();
    useEffect(() => {
        axios.get(`http://localhost:5000/cartProduct/${user.email}`)
            .then(function (response) {
                setProducts(response.data);
            })
    }, [products, user.email])


    return (
        <div className='order-part'>
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

        </div >
    );
};

export default Orders;