import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Navbar, Nav, Container } from 'react-bootstrap';

export default class Header extends Component {
    render() {
        return (    
            <Navbar expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="/logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                        Quick Template
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="mr-auto">
                            <Link className="nav-link" to="/">Home</Link>
                            <Link className="nav-link" to="/about">About</Link>
                            <Nav.Link href="https://www.github.com" alt="external link">Link3</Nav.Link>
                        </Nav>
                        <Nav className="justify-content-end">
                            <Nav.Link href="#link4">Link4</Nav.Link>
                            <Nav.Link eventKey={5} href="#link5">
                                Link5
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        );
    }
}