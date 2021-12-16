import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './ProductsDetails.css'

const ProductsDetails = () => {

    const { id } = useParams();
    const { user } = useAuth();
    const [products, setProducts] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:5000/allProduct/${id}`)
            .then(function (response) {
                setProducts(response.data);
            })
    }, [id])

    const handleCartBtn = () => {
        axios.post('http://localhost:5000/cartProduct', {
            name: products?.name,
            img: products?.img,
            price: products?.price,
            email: user?.email,
            status: 'pending',
        })
            .then(function (response) {
            })
    }

    return (
        <div className='pd-details-part'>
            <Container>
                <Row className='align-items-center'>
                    <div className="bread-cramb">
                        <NavLink end to="/">home</NavLink>
                        <span>/</span>
                        <NavLink end to={`/ProductsDetails/${id}`}>Product</NavLink>
                    </div>
                    <Col lg={4}>
                        <div className="pd-details-thumb">
                            <img src={products.img} alt="" />
                        </div>
                    </Col>
                    <Col lg={8}>
                        <div className="pd-details-caption">
                            <h3>{products.name}</h3>
                            <span>${products.price}</span>
                            <ul>
                                <li>{products.des1}</li>
                                <li>{products.des2}</li>
                                <li>{products.des4}</li>
                                <li>{products.des5}</li>
                                <li>{products.des6}</li>
                                <li>{products.des7}</li>
                                <li>{products.des8}</li>
                            </ul>
                            <button onClick={handleCartBtn} className='cart-btn'>Add To Cart</button>
                            <div className="brand">
                                <p>Availability: {products.Availability}</p>
                                <p>Brands: {products.Brands}</p>
                                <p>SKU: 0057</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ProductsDetails;