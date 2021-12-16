import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import SingleOrder from '../SingleOrder/SingleOrder';
import './WishList.css'

const WishList = () => {
    const [products, setProducts] = useState([])
    const { user } = useAuth();
    useEffect(() => {
        axios.get(`http://localhost:5000/wishListProduct/${user.email}`)
            .then(function (response) {
                setProducts(response.data);
            })
    }, [products, user.email])


    return (
        <div className='wishList-part product-table'>
            <h4>My Orders</h4>
            <Table bordered responsive>
                <thead>
                    <tr>
                        <th>Delete</th>
                        <th>Image</th>
                        <th>Product Name</th>
                        <th>Unit Price</th>
                        <th>Cart Product</th>
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

export default WishList;