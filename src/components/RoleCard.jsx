import React from 'react';
import { Button, Card } from 'react-bootstrap';
import endDesignLogo from '../assets/logo.svg';

function RoleCard({ roleData }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{roleData}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default RoleCard;
