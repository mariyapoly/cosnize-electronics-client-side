import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import SingleManageOrder from '../SingleManageOrder/SingleManageOrder';

const ManageAllOrders = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/cartProduct`)
            .then(function (response) {
                setProducts(response.data);
            })
    }, [products])

    return (
        <div className='manageorder-part product-table' >
            <h4>Manage All Orders</h4>
            <Table bordered responsive>
                <thead>
                    <tr>
                        <th>Delete</th>
                        <th>Image</th>
                        <th>Product Name</th>
                        <th>Email</th>
                        <th>Unit Price</th>
                        <th>status</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => <SingleManageOrder
                            key={product._id}
                            product={product}
                        ></SingleManageOrder>
                        )
                    }
                </tbody>
            </Table>
        </div >
    );
};

export default ManageAllOrders;