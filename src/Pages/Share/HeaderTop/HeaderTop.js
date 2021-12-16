import React, { useEffect, useState } from 'react';
import { Col, Container, NavDropdown, Row } from 'react-bootstrap';
import './HeaderTop.css';
import logo from '../../../images/logo.png';
import hart from '../../../images/hart.png';
import cart from '../../../images/cart.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';

const HeaderTop = () => {

    const [products, setProducts] = useState([])
    const [wishProducts, setWishProducts] = useState([])
    const navigate = useNavigate();
    const { signOutUser, user } = useAuth();
    const logOut = () => {
        signOutUser();
    }

    useEffect(() => {
        axios.get(`http://localhost:5000/cartProduct/${user.email}`)
            .then(function (response) {
                setProducts(response.data);
            })
    }, [products, user.email])

    useEffect(() => {
        axios.get(`http://localhost:5000/wishListProduct/${user.email}`)
            .then(function (response) {
                setWishProducts(response.data);
            })
    }, [products, user.email])

    const handleCartBtn = () => {
        navigate('/dashboard/orders')
    }
    const handlewishBtn = () => {
        navigate('/dashboard/wishlist')
    }

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
                                    <li className='sign-in'><NavLink end to="/SignIn">Sign In</NavLink></li>
                                    {
                                        user.email && <> <li>
                                            <NavDropdown title="My account" id="basic-nav-dropdown">
                                                <NavLink end to="/dashboard">Dashboard</NavLink>
                                                <button className='logout-btn' onClick={logOut}>Sign Out</button>
                                            </NavDropdown>
                                        </li>

                                            <li>{user.displayName}</li>
                                        </>
                                    }
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
                                <ul>
                                    <li className='cart' onClick={handlewishBtn}>
                                        <img src={hart} alt="hart" />
                                        <span>{wishProducts.length}</span>
                                    </li>
                                    <li className='cart' onClick={handleCartBtn}>
                                        <img src={cart} alt="cart" />
                                        <span>{products.length}</span>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default HeaderTop;