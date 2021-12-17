import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './DashBoard.css'

const DashBoard = () => {

    const { user, isAdmin } = useAuth();


    return (
        <div className='dashboard'>
            <Container>
                <Row>
                    <Col lg={2}>
                        <div className="dashboard-left">
                            <p>Hello, {user.displayName}</p>
                            {
                                user.email && isAdmin ? <ul>
                                    <li><NavLink end to="/dashboard/ManageAllOrders">Manage All Orders</NavLink></li>
                                    <li><NavLink end to="/dashboard/AddHomeProduct">Add Home Product</NavLink></li>
                                    <li><NavLink end to="/dashboard/ManageAllProducts">Manage All Products</NavLink></li>
                                    <li><NavLink end to="/dashboard/MakeAdmin">Make Admin</NavLink></li>
                                </ul> : <ul>
                                    <li><NavLink end to="/dashboard/orders">My Orders</NavLink></li>
                                    <li><NavLink end to="/dashboard/reviews">My Reviews</NavLink></li>
                                    <li><NavLink end to="/dashboard/wishlist">My Wishlist</NavLink></li>
                                </ul>
                            }

                        </div>
                    </Col>
                    <Col lg={10}>
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