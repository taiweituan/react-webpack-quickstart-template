import React, { Component } from 'react';

import { Navbar } from 'react-bootstrap';

export default class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
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
            </Navbar>
        );
    }
}