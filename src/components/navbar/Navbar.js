import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar , Nav } from 'react-bootstrap';
import RouteNavItem from './RouteNavItem';

import './Navbar.css';

class NavbarDefault extends Component {
    render() {
        return (
            <div className="App container">
                <Navbar fluid collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">Aubergine</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <RouteNavItem href="/signup">Inscription</RouteNavItem>
                            <RouteNavItem href="/login">Connexion</RouteNavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </div>
        );
    }
}

export default NavbarDefault;