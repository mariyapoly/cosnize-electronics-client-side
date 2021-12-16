import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './DashBoard.css'

const DashBoard = () => {

    const { user } = useAuth();

    return (
        <div className='dashboard'>
            <Container>
                <Row>
                    <Col lg={3}>
                        <div className="dashboard-left">
                            <p>Hello, {user.displayName}</p>
                            <ul>
                                <li><NavLink end to="/dashboard/orders">My Orders</NavLink></li>
                                <li><NavLink end to="/dashboard/reviews">My Reviews</NavLink></li>
                                <li><NavLink end to="/dashboard/wishlist">My Wishlist</NavLink></li>
                                <li><NavLink end to="/dashboard/payment">My Payment</NavLink></li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={9}>
                        <div className="dashborad-right">
                            <Outlet></Outlet>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DashBoard;