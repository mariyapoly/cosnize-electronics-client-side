import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SingleProduct from '../../Share/SingleProduct/SingleProduct';
import './ManageAllProducts.css'

const ManageAllProducts = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/allProduct')
            .then(function (response) {
                setProducts(response.data);
            })
    }, [products])

    const handleDeletePd = (id) => {
        axios.delete(`http://localhost:5000/allProduct/${id}`)
            .then(function (response) {
            })
    }

    return (
        <div className='manage-home-products'>
            <Row>
                {
                    products.map(product => <SingleProduct
                        handleDeletePd={handleDeletePd}
                        key={product._id}
                        product={product}
                    ></SingleProduct>)
                }
            </Row>

        </div>
    );
};

export default ManageAllProducts;