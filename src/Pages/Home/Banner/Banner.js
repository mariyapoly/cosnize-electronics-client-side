import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import heroImg1 from '../../../images/hero_1.png';
import heroImg2 from '../../../images/hero_2.png';
import heroImg3 from '../../../images/hero_3.png';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-part'>
            <Container>
                <Row>
                    <Col lg={8}>
                        <div className="slider-left-thumb">
                            <div className="slider-content">
                                <h1>Modern And Just<span> Captivating</span></h1>
                                <p>The most important upgrades of Xbox One S are a new controller and cross-play with PC.</p>
                                <button>Shopping Now</button>
                            </div>
                            <div className="slider-thumb">
                                <img src={heroImg1} alt="" />
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="slider-right headphone">
                            <div>
                                <h2>New Style Bluetooh Speaker</h2>
                                <p>Contrary to popular new</p>
                            </div>
                            <div>
                                <img src={heroImg2} alt="" />
                            </div>
                        </div>
                        <div className="slider-right Smartwatch">
                            <div>
                                <h2>Limited Smartwatch</h2>
                                <p>Discount 30% on Products</p>
                            </div>
                            <div>
                                <img src={heroImg3} alt="" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;