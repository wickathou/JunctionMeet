import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import endDesignLogo from '../assets/logo.svg';

function TeamCard({memberData}) {
  return (
    <Card className="teamMemberCard">
      <Image fluid rounded src={endDesignLogo} />
      <Card.Body>
        <Card.Title>Person Named {memberData}</Card.Title>
        <Card.Text>
          Role
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default TeamCard;
