import React from 'react';
import {
  Container, Image, Nav, Navbar, NavbarBrand, NavDropdown, NavLink,
} from 'react-bootstrap';
import endDesignLogo from '../assets/logo.svg';
import '../App.scss';

function Header() {
  return (
    <header>
      <Navbar>
        <Container>
          <Navbar.Brand><img src={endDesignLogo} alt="End Design logo" width="100px" height="100px" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex align-items-center">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Image className="userIconThumbnail" roundedCircle src={endDesignLogo} />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
