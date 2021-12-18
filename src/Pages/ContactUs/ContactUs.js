import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import './ContactUs.css'

const ContactUs = () => {


    const { register, handleSubmit, } = useForm();
    const onSubmit = data => {
    };

    return (
        <div className='contact-part'>
            <Container>
                <Row>
                    <div className="bread-cramb">
                        <NavLink end to="/">home</NavLink>
                        <span>/</span>
                        <NavLink end to="/contact">Contact</NavLink>
                    </div>
                    <Col lg={6}>
                        <div className="contact-left">
                            <h3>Contact Us</h3>
                            <p>If your looking for a sales-oriented approach, you can use this one from IMPACT's Contact Us page.</p>
                            <div className="single-contact">
                                <span>Call us</span>
                                <p>(+84) 8 3555 3203</p>
                            </div>
                            <div className="single-contact">
                                <span>EMAIL ADDRESS</span>
                                <p>Cosnize.Info@Gmail.Com</p>
                            </div>
                            <div className="single-contact">
                                <span>STORE LOCATION</span>
                                <p>102 Your Name Road, Your City, United Of Kingdom203</p>
                            </div>
                            <div className="single-contact">
                                <span>TIME:</span>
                                <p>Monday - Friday</p>
                                <p>08AM - 09PM</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="contact-right">
                            <h3>Get In Touch</h3>
                            <p>Your email address will not be published. Required fields are marked *</p>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <label htmlFor="name">Name   *</label>
                                <input required id='name' {...register("name", { required: true })} />
                                <label htmlFor="email">Username or email  *</label>
                                <input required id='email' {...register("email", { required: true })} />
                                <label htmlFor="sub">Subject  *</label>
                                <input required id='sub' {...register("sub", { required: true })} />
                                <label htmlFor="mess">Message  *</label>
                                <input required id='mess'  {...register("mess")} />
                                <input className='submit-btn' type="submit" value="Send Message" />
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ContactUs;