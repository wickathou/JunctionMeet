import React from 'react';
import {
  Button, Card, Carousel, Image,
} from 'react-bootstrap';
import endDesignLogo from '../assets/logo.svg';

function TeamCard({ memberData }) {
  const {name, role} = memberData;

  return (
    <Card className="teamMemberCard">
      <Image fluid rounded src={endDesignLogo} />
      <Card.Body>
        <Card.Title>
          {name}
        </Card.Title>
        <Card.Text>
          {role}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default TeamCard;
