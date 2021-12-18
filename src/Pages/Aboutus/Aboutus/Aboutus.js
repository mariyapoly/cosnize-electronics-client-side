import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import aboutImg from '../../../images/about.png';
import './Aboutus.css'

const Aboutus = () => {
    return (
        <div className='about-part'>
            <Container>
                <Row>
                    <div className="bread-cramb">
                        <NavLink end to="/">home</NavLink>
                        <span>/</span>
                        <NavLink end to="/aboutUs">About</NavLink>
                    </div>
                    <Col lg={6}>
                        <div className="about-img">
                            <img src={aboutImg} alt="" />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="about-text">
                            <span>ABOUT OUR ONLINE STORE</span>
                            <h3>Hello</h3>
                            <h3>With 25+ Years Of Experience</h3>
                            <h5>Over 25 years Cosnize helping companies reach their dolore
                                financial and branding goals.</h5>
                            <p>The main purpose of your About Us page is to give your visitors a glimpse into who you are as a person or a business

                                As users discover your brand, they need to distinguish what sets you apart and makes you… you.

                                This often requires finding the right balance between compelling content and a design carefully planned to look the part.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Aboutus;