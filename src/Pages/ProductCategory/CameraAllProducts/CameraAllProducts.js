import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import SingleProduct from '../../Share/SingleProduct/SingleProduct';
import './CameraAllProducts.css'

const CameraAllProducts = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('https://cryptic-hollows-56535.herokuapp.com/cameraProduct')
            .then(function (response) {
                setProducts(response.data);
            })
    }, [])


    return (
        <div className='All-products'>
            <Container>
                <Row>
                    <div className="bread-cramb">
                        <NavLink end to="/">home</NavLink>
                        <span>/</span>
                        <NavLink end to="/camera">Camera</NavLink>
                    </div>
                    {
                        products.map(product => <SingleProduct
                            key={product._id}
                            product={product}
                        ></SingleProduct>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default CameraAllProducts;
