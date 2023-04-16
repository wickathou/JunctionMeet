import React from 'react';
import { Container, Nav } from 'react-bootstrap';

function NavFilters() {
  return (
    <Container className="d-flex justify-content-between align-items-center">
      <h1>Join team</h1>
      <Nav variant="pills" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Filter</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Option 2</Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
}

export default NavFilters;
