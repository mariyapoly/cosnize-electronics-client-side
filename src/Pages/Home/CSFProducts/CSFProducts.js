import React from 'react';
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap';
import SingleProduct from '../../Share/SingleProduct/SingleProduct';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import pd1 from '../../../images/t_1.png';
import pd2 from '../../../images/t_2.png';
import pd3 from '../../../images/t_3.png';
import pd4 from '../../../images/t_4.png';
import './CSFProducts.css'

const CSFProducts = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={8}>
                        <div className='secton-border'>
                            <Tabs
                                defaultActiveKey="home"
                                transition={false}
                                id="noanim-tab-example"
                                className="mb-3"
                            >
                                <Tab eventKey="home" title="computer">
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
                                    </Row>
                                </Tab>
                                <Tab eventKey="profile" title="onsale">
                                    <Row>
                                        <Col lg={4}>
                                            <SingleProduct></SingleProduct>
                                        </Col>
                                        <Col lg={4}>
                                            <SingleProduct></SingleProduct>
                                        </Col>
                                    </Row>
                                </Tab>
                                <Tab eventKey="contact" title="featured" >
                                    <Row>
                                        <Col lg={4}>
                                            <SingleProduct></SingleProduct>
                                        </Col>
                                    </Row>
                                </Tab>
                            </Tabs>
                        </div>
                        <div className="products-price-off">
                            <p>On All Apple Products</p>
                            <h5>Save Up To 40% Off</h5>
                            <button className='cart-btn'>Shop Now</button>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="top-rated=product best-selling-products">
                            <h5>Top Rated Products</h5>
                            <div className="single-selling-pd">
                                <div className="product-thumb">
                                    <img src={pd1} alt="" />
                                </div>
                                <div className="product-caption">
                                    <p>Desktop Webcam,Hd 720P Widescreen</p>
                                    <div className="rating">
                                        <FontAwesomeIcon className='rating-icon' icon={faStar} />
                                        <FontAwesomeIcon className='rating-icon' icon={faStar} />
                                        <FontAwesomeIcon className='rating-icon' icon={faStar} />
                                        <FontAwesomeIcon className='rating-icon' icon={faStar} />
                                        <FontAwesomeIcon className='rating-icon' icon={faStarHalfAlt} />
                                    </div>
                                    <span>$35.00</span>
                                </div>
                            </div>
                            <div className="single-selling-pd">
                                <div className="product-thumb">
                                    <img src={pd2} alt="" />
                                </div>
                                <div className="product-caption">
                                    <p>Game Console Black,Hd 720P Widescreen</p>
                                    <div className="rating">
                                        <FontAwesomeIcon className='rating-icon' icon={faStar} />
                                        <FontAwesomeIcon className='rating-icon' icon={faStar} />
                                        <FontAwesomeIcon className='rating-icon' icon={faStar} />
                                        <FontAwesomeIcon className='rating-icon' icon={faStar} />
                                        <FontAwesomeIcon className='rating-icon' icon={faStarHalfAlt} />
                                    </div>
                                    <span>$32.00</span>
                                </div>
                            </div>
                            <div className="single-selling-pd">
                                <div className="product-thumb">
                                    <img src={pd3} alt="" />
                                </div>
                                <div className="product-caption">
                                    <p>Smart Phone Webcam,Hd 720P Galaxy S10 Plus</p>
                                    <div className="rating">
                                        <FontAwesomeIcon className='rating-icon' icon={faStar} />
                                        <FontAwesomeIcon className='rating-icon' icon={faStar} />
                                        <FontAwesomeIcon className='rating-icon' icon={faStar} />
                                        <FontAwesomeIcon className='rating-icon' icon={faStar} />
                                        <FontAwesomeIcon className='rating-icon' icon={faStarHalfAlt} />
                                    </div>
                                    <span>$65.00</span>
                                </div>
                            </div>
                            <div className="single-selling-pd">
                                <div className="product-thumb">
                                    <img src={pd4} alt="" />
                                </div>
                                <div className="product-caption">
                                    <p>Smart Phone Webcam,Hd 720P Galaxy S10 Plus</p>
                                    <div className="rating">
                                        <FontAwesomeIcon className='rating-icon' icon={faStar} />
                                        <FontAwesomeIcon className='rating-icon' icon={faStar} />
                                        <FontAwesomeIcon className='rating-icon' icon={faStar} />
                                        <FontAwesomeIcon className='rating-icon' icon={faStar} />
                                        <FontAwesomeIcon className='rating-icon' icon={faStarHalfAlt} />
                                    </div>
                                    <span>$25.00</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CSFProducts;