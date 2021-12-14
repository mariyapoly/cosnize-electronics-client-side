import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './HeaderTop.css';
import logo from '../../../images/logo.png';
import hart from '../../../images/hart.png';
import cart from '../../../images/cart.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const HeaderTop = () => {
    return (
        <>
            <div className='header-top'>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="headertop-left">
                                <p>Wellcome To Our Online Shopping Store !</p>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="headertop-right">
                                <ul>
                                    <li>My account</li>
                                    <li>$ USD</li>
                                    <li>English</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="header">
                <Container>
                    <Row className='align-items-center'>
                        <Col lg={3}>
                            <div className="logo"><img src={logo} alt="logo" /></div>
                        </Col>
                        <Col lg={6}>
                            <div className="search-box">
                                <input type="text" placeholder='Search for item...' />
                                <div className="search-icon">
                                    <FontAwesomeIcon icon={faSearch} />
                                </div>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="cart-thumb">
                                <img src={hart} alt="hart" />
                                <img src={cart} alt="cart" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default HeaderTop;