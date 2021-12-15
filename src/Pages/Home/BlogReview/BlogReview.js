import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import blog1 from '../../../images/blog.png';
import blog2 from '../../../images/blog 2.png';
import reviewBg from '../../../images/testmonial.png';
import client from '../../../images/client1.png';
import './BlogReview.css'

const BlogReview = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className='secton-border best-selling-products'>
                            <h5>THE BLOG</h5>
                            <Row>
                                <Col lg={6}>
                                    <div className="single-blog">
                                        <div className="blog-thumb">
                                            <img src={blog1} alt="" />
                                        </div>
                                        <div className="date">
                                            <span>John</span>
                                            <span>May 6 ,2021</span>
                                        </div>
                                        <h6>Thin Laptop Rentals and Rivalry</h6>
                                        <p>As laptops have got slimmer, lighter and
                                            more compact, sacrifices have been</p>
                                        <button className='read-more-btn'>Read More</button>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="single-blog">
                                        <div className="blog-thumb">
                                            <img src={blog2} alt="" />
                                        </div>
                                        <div className="date">
                                            <span>John</span>
                                            <span>May 6 ,2021</span>
                                        </div>
                                        <h6>Thin Laptop Rentals and Rivalry</h6>
                                        <p>As laptops have got slimmer, lighter and
                                            more compact, sacrifices have been</p>
                                        <button className='read-more-btn'>Read More</button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className='secton-border best-selling-products'>
                            <h5>WHAT CLIENTS SAY?</h5>
                            <div className="review-bg">
                                <img src={reviewBg} alt="reviewBg" />
                                <div className="client-thumb">
                                    <img src={client} alt="" />
                                </div>
                            </div>
                            <div className="review-text">
                                <p>The open-source Bitwarden’s free tier handles all expected password manager tasks with surprisingly few limitations. Its paid tier adds security, storage, and sharing tools, all at an</p>
                                <span>Richard Victor</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BlogReview;