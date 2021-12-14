import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import phone from '../../../images/phone-2.png';
import laptop from '../../../images/laptop.png';
import './ProductBanner.css'

const ProductBanner = () => {
    return (
        <div className='product-banner'>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="single-product-banner phone">
                            <div className="product-text">
                                <span>new arrivals</span>
                                <h5>Galaxy S10 64GB/4Gb rAM</h5>
                            </div>
                            <div className="phone-thumb">
                                <img src={phone} alt="phone-img" />
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="single-product-banner laptop">
                            <div className="product-text">
                                <span>sall 30% off</span>
                                <h5>Computers & Laptop</h5>
                            </div>
                            <div className="phone-thumb">
                                <img src={laptop} alt="phone-img" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ProductBanner;