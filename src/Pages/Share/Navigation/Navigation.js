import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import phone from '../../../images/phone.png';
import './Navigation.css'

const Navigation = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <NavDropdown className='categories' title="all categories" id="basic-nav-dropdown">
                    <NavLink end to="/camera">Camera & Photo</NavLink>
                    <NavLink end to="/television">Television</NavLink>

                </NavDropdown>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <NavLink end to="/">HOME</NavLink>
                        <NavLink end to="/aboutUs">AOBUT US</NavLink>
                        <NavLink end to="/contact">CONTACT US</NavLink>
                        <NavLink end to="/Shope">SHOP</NavLink>
                    </Nav>
                    <div className="call-area">
                        <img src={phone} alt="" />
                        <div>
                            <p>Call Us Now</p>
                            <p>(+1).456.8978</p>
                        </div>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;