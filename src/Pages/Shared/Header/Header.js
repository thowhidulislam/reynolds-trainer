import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
            <Container>
                <Navbar.Brand href="/home">REYNOLDS</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='ms-auto'>
                        <Nav.Link href="#features">SERVICES</Nav.Link>
                        <Nav.Link href="#pricing">ABOUT</Nav.Link>
                        <Nav.Link href="#deets">LOGIN</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;