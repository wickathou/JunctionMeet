import React from 'react';
import {
  Container, Nav, Navbar, NavbarBrand, NavLink,
} from 'react-bootstrap';
import endDesignLogo from '../assets/logo.svg';

function Header() {
  return (
    <header>
      <Navbar>
        <Container>
          <NavbarBrand><img src={endDesignLogo} alt="End Design logo" width="100px" height="100px" /></NavbarBrand>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
