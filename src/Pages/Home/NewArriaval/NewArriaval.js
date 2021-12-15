import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SingleProduct from '../../Share/SingleProduct/SingleProduct';
import arivalthumb from '../../../images/arival-1.png';
import arivalthumb2 from '../../../images/arival-2.png';
import './NewArriaval.css'

const NewArriaval = () => {
    return (
        <div className='new-arrival-part'>
            <Container>
                <Row>
                    <Col lg={8}>
                        <div className='best-selling-products'>
                            <h5>New Arrivals</h5>
                            <Row>
                                <Col lg={4}>
                                    <SingleProduct></SingleProduct>
                                </Col>
                                <Col lg={4}>
                                    <SingleProduct></SingleProduct>
                                </Col>
                                <Col lg={4}>
                                    <SingleProduct></SingleProduct>
                                </Col>
                                <Col lg={4}>
                                    <SingleProduct></SingleProduct>
                                </Col>
                                <Col lg={4}>
                                    <SingleProduct></SingleProduct>
                                </Col>
                                <Col lg={4}>
                                    <SingleProduct></SingleProduct>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="arrival-right">
                            <div className="arrival-thumn1">
                                <img src={arivalthumb} alt="arivalthumb" />
                                <div className="arrival-content">
                                    <span>up to 10% off in store</span>
                                    <h5>Headphone All New 2021 </h5>
                                    <button className='shoping-btn'>Shop Now</button>
                                </div>
                            </div>
                            <div className="arrival-thumn1 arrival-content2">
                                <img src={arivalthumb2} alt="arivalthumb2" />
                                <div className="arrival-content">
                                    <span>on the weekend</span>
                                    <h5>Now Black Friday</h5>
                                    <button className='shoping-btn'>Shop Now</button>
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