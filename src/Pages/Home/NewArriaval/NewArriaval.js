import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import arivalthumb from '../../../images/arival-1.png';
import arivalthumb2 from '../../../images/arival-2.png';
import HomeProduct from '../../Share/HomeProduct/HomeProduct';
import './NewArriaval.css'

const NewArriaval = () => {


    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('https://cryptic-hollows-56535.herokuapp.com/allProduct')
            .then(function (response) {
                setProducts(response.data);
            })
    }, [])
    const newPd = products.slice(0, 6);

    const navigate = useNavigate();

    const handleShoppingBtn = () => {
        navigate('/Shope')
    }


    return (
        <div className='new-arrival-part'>
            <Container>
                <Row>
                    <Col lg={8}>
                        {
                            products.length ?
                                <div className='best-selling-products'>
                                    <h5>New Arrivals</h5>
                                    <Row>
                                        {
                                            newPd.map(product => <HomeProduct
                                                key={product._id}
                                                product={product}
                                            ></HomeProduct>)
                                        }
                                    </Row>
                                </div>
                                : <Spinner animation="border" variant="primary" />
                        }
                    </Col>
                    <Col lg={4}>
                        <div className="arrival-right">
                            <div className="arrival-thumn1">
                                <img src={arivalthumb} alt="arivalthumb" />
                                <div className="arrival-content">
                                    <span>up to 10% off in store</span>
                                    <h5>Headphone All New 2021 </h5>
                                    <button onClick={handleShoppingBtn} className='shoping-btn'>Shop Now</button>
                                </div>
                            </div>
                            <div className="arrival-thumn1 arrival-content2">
                                <img src={arivalthumb2} alt="arivalthumb2" />
                                <div className="arrival-content">
                                    <span>on the weekend</span>
                                    <h5>Now Black Friday</h5>
                                    <button onClick={handleShoppingBtn} className='shoping-btn'>Shop Now</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NewArriaval;