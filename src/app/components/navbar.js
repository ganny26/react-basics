import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
class NavBar extends Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Hacker's News</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">New</NavItem>
                        <NavItem eventKey={2} href="#">Comments</NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">Login</NavItem>
                        <NavItem eventKey={2} href="#">SignUp</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavBar;