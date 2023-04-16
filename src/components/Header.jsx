import React from 'react';
import {
  Container, Image, Nav, Navbar, NavbarBrand, NavDropdown, NavLink,
} from 'react-bootstrap';
import junctionLogo from '../assets/junction-emblem.png';
import '../App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/user/userSlice';

function Header() {
  const dispatch = useDispatch();
  const { status } = useSelector((store) => store.user);

  const handleLogin = () => {
    dispatch(login());
  };

  return (
    <header>
      <Navbar>
        <Container>
          <Navbar.Brand><img src={junctionLogo} alt="End Design logo" width="100px" height="100px" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex align-items-center">
              <Nav.Link onClick={handleLogin}>{status}</Nav.Link>
              <NavDropdown title="Menu" id="basic-nav-dropdown">
                <NavDropdown.Item>This is</NavDropdown.Item>
                <NavDropdown.Item>Not Ready</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  😅
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
