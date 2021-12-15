import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Register from '../Register/Register';
import SignIn from '../SignIn/SignIn';

const LogInForm = () => {
    return (
        <div className='from-area'>
            <Container>
                <Row>
                    <Col lg={6}>
                        <SignIn></SignIn>
                    </Col>
                    <Col lg={6}>
                        <Register></Register>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LogInForm;