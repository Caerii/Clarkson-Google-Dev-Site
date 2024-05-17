import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap"
import { Link } from 'react-router-dom';

import logo from "./logo.svg"

export default class MyNavbar extends React.Component
{
    render() {
        return(
            <Navbar collapseOnSelect expand="sm" bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img
                            src={logo}
                            height="30"
                            className="d-inline-block align-top"
                            alt="Google Developer Student Club Clarkson University"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto" as="ul">
                            <Nav.Item as="li">
                                <Nav.Link as={Link} to="/about">About</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link as={Link} to="/members">Members</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}