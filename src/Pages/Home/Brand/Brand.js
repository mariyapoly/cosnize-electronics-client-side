import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import brand1 from '../../../images/brand1.png';
import brand2 from '../../../images/brand2.png';
import brand3 from '../../../images/brand3.png';
import brand4 from '../../../images/brand4.png';
import brand5 from '../../../images/brand5.png';
import brand6 from '../../../images/brand6.png';
import './Brand.css'

const Brand = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="secton-border brand-part">
                            <Row>
                                <Col lg={2}>
                                    <img src={brand1} alt="" />
                                </Col>
                                <Col lg={2}>
                                    <img src={brand2} alt="" />
                                </Col>
                                <Col lg={2}>
                                    <img src={brand3} alt="" />
                                </Col>
                                <Col lg={2}>
                                    <img src={brand4} alt="" />
                                </Col>
                                <Col lg={2}>
                                    <img src={brand5} alt="" />
                                </Col>
                                <Col lg={2}>
                                    <img src={brand6} alt="" />
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Brand;