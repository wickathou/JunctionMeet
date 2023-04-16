import React from 'react'
import { Button, Card } from 'react-bootstrap'
import endDesignLogo from '../assets/logo.svg';

function RoleCard() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Link href="#">Apply</Card.Link>
      </Card.Body>
    </Card>
  )
}

export default RoleCard