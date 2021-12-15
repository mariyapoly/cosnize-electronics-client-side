import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import pd1 from '../../../images/pd_2.png';
import pd2 from '../../../images/pd_4.png';
import pd3 from '../../../images/pd_6.png';
import pd4 from '../../../images/to_10.png';
import pd5 from '../../../images/to_9.png';
import pd6 from '../../../images/to_8.png';
import pd7 from '../../../images/to_7.png';
import pd8 from '../../../images/to_6.png';
import './TopProducts.css'

const TopProducts = () => {
    return (
        <div className='top-products'>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className='secton-border best-selling-products'>
                            <h5>top Categories</h5>
                            <Row className='pd-border'>
                                <Col lg={3}>
                                    <div className="single-top-pd">
                                        <div className="pd-thumb">
                                            <img src={pd1} alt="products" />
                                        </div>
                                        <div className="pd-caption">
                                            <p>Headphone Black</p>
                                            <span>12 Products</span>
                                            <button className='view-more-btn'>View More</button>
                                            <button className='cart-btn view-btn-hover'>View More</button>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={3}>
                                    <div className="single-top-pd">
                                        <div className="pd-thumb">
                                            <img src={pd2} alt="products" />
                                        </div>
                                        <div className="pd-caption">
                                            <p>Headphone Black</p>
                                            <span>8 Products</span>
                                            <button className='view-more-btn'>View More</button>
                                            <button className='cart-btn view-btn-hover'>View More</button>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={3}>
                                    <div className="single-top-pd">
                                        <div className="pd-thumb">
                                            <img src={pd3} alt="products" />
                                        </div>
                                        <div className="pd-caption">
                                            <p>Headphone Black</p>
                                            <span>11 Products</span>
                                            <button className='view-more-btn'>View More</button>
                                            <button className='cart-btn view-btn-hover'>View More</button>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={3}>
                                    <div className="single-top-pd">
                                        <div className="pd-thumb">
                                            <img src={pd4} alt="products" />
                                        </div>
                                        <div className="pd-caption">
                                            <p>Headphone Black</p>
                                            <span>7 Products</span>
                                            <button className='view-more-btn'>View More</button>
                                            <button className='cart-btn view-btn-hover'>View More</button>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={3}>
                                    <div className="single-top-pd">
                                        <div className="pd-thumb">
                                            <img src={pd5} alt="products" />
                                        </div>
                                        <div className="pd-caption">
                                            <p>Headphone Black</p>
                                            <span>8 Products</span>
                                            <button className='view-more-btn'>View More</button>
                                            <button className='cart-btn view-btn-hover'>View More</button>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={3}>
                                    <div className="single-top-pd">
                                        <div className="pd-thumb">
                                            <img src={pd6} alt="products" />
                                        </div>
                                        <div className="pd-caption">
                                            <p>Headphone Black</p>
                                            <span>6 Products</span>
                                            <button className='view-more-btn'>View More</button>
                                            <button className='cart-btn view-btn-hover'>View More</button>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={3}>
                                    <div className="single-top-pd">
                                        <div className="pd-thumb">
                                            <img src={pd7} alt="products" />
                                        </div>
                                        <div className="pd-caption">
                                            <p>Headphone Black</p>
                                            <span>9 Products</span>
                                            <button className='view-more-btn'>View More</button>
                                            <button className='cart-btn view-btn-hover'>View More</button>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={3}>
                                    <div className="single-top-pd">
                                        <div className="pd-thumb">
                                            <img src={pd8} alt="products" />

                                        </div>
                                        <div className="pd-caption">
                                            <p>Headphone Black</p>
                                            <span>10 Products</span>
                                            <button className='view-more-btn'>View More</button>
                                            <button className='cart-btn view-btn-hover'>View More</button>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TopProducts;