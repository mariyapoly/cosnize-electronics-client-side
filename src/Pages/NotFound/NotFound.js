import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {

    const navigate = useNavigate();

    const backHome = () => {
        navigate('/')
    }

    return (
        <div className='not-found'>
            <Container>
                <Row>
                    <h1>404</h1>
                    <p>OPPS This Page IS Not Available</p>
                    <button onClick={backHome}>Back To Home</button>
                </Row>
            </Container>
        </div>
    );
};

export default NotFound;