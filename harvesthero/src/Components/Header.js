import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#007bff' }}>
      <Container>
        <Navbar.Brand href="#home" style={{ color: '#fff', fontWeight: 'bold' }}>
          BrandName
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features" style={{ color: '#fff', marginRight: '15px' }}>Features</Nav.Link>
            <Nav.Link href="#pricing" style={{ color: '#fff', marginRight: '15px' }}>Pricing</Nav.Link>
            {/* Add more links as needed */}
          </Nav>
          <Button variant="outline-light">Login</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
