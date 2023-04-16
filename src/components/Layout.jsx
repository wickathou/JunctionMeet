import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './Header';
import NavFilters from './NavFilters';

function Layout() {
  return (
    <>
      <Header />
      <NavFilters />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default Layout;
