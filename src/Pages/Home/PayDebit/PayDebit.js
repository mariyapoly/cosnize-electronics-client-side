import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './PayDebit.css'

const PayDebit = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className='pay-bg'>
                            <h3> <span className='red'>20% Off</span>  When Paying By <span className='blue'>Debit Card</span></h3>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default PayDebit;