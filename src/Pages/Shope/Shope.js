import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import HomeProduct from '../Share/HomeProduct/HomeProduct';
import './Shope.css'

const Shope = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('https://cryptic-hollows-56535.herokuapp.com/allProduct')
            .then(function (response) {
                setProducts(response.data);
            })
    }, [])

    return (
        <div className='shope-part'>
            <Container>
                <Row>
                    <div className="bread-cramb">
                        <NavLink end to="/">home</NavLink>
                        <span>/</span>
                        <NavLink end to="/Shope">Shope</NavLink>
                    </div>
                    {
                        products.map(product => <HomeProduct
                            key={product._id}
                            product={product}
                        ></HomeProduct>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Shope;