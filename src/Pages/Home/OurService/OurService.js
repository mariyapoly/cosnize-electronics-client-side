import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import serviceImg1 from '../../../images/service-1.png';
import serviceImg2 from '../../../images/service-2.png';
import serviceImg3 from '../../../images/service-3.png';
import serviceImg4 from '../../../images/service-4.png';
import './OurService.css'

const OurService = () => {
    return (
        <div className='service-part'>
            <Container>
                <Row className='service-container'>
                    <Col lg={3}>
                        <div className="songle-service">
                            <div className="service-thumb">
                                <img src={serviceImg1} alt="" />
                            </div>
                            <div className="service-text">
                                <h5>Free Delivery</h5>
                                <p>free shopping on all order</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="songle-service">
                            <div className="service-thumb">
                                <img src={serviceImg2} alt="" />
                            </div>
                            <div className="service-text">
                                <h5>Online Support 24/7</h5>
                                <p>Support online 24 hours</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="songle-service">
                            <div className="service-thumb">
                                <img src={serviceImg3} alt="" />
                            </div>
                            <div className="service-text">
                                <h5>Money Return</h5>
                                <p>Back guarantee under 7 days</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="songle-service">
                            <div className="service-thumb">
                                <img src={serviceImg4} alt="" />
                            </div>
                            <div className="service-text">
                                <h5>Member Discount</h5>
                                <p>Onevery order over $30.00</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default OurService;