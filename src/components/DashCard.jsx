import React, { useEffect, useState } from 'react';
import {
  Badge, Button, Card, CardGroup, Carousel, Col, Collapse, Image, ListGroup, Row, Tab,
} from 'react-bootstrap';
import MultiCarousel from './MultiCarousel';
import endDesignLogo from '../assets/logo.svg';
import '../App.scss';
import TeamCard from './TeamCard';
import TeamModal from './TeamModal';
import RolesPreview from './RolesPreview';
import RoleModal from './RoleModal';
import MemberModal from './MemberModal';

function DashCard({ data }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);


  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => setOpen1(!open1)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showRole, setShowRole] = useState(false);

  const handleCloseRole = () => setShowRole(false);
  const handleShowRole = () => setShowRole(true);

  const [showMember, setShowMember] = useState(false);

  const handleCloseMember = () => setShowMember(false);
  const handleShowMember = () => setShowMember(true);

  const teamData = {
    members: ['joe', 'bob', 'jim'],
    roles: ['dev', 'design', 'marketing'],
    challenge: 'Fazer'
  }


  return (
    <Card>
      <Card.Header className="d-flex align-items-center justify-content-between">
        <Card.Img className="userIconThumbnail" src={endDesignLogo} />
        <Card.Title>
          Awesomness
          <Badge bg="primary">{teamData.challenge? teamData.challenge :'No challenge'}</Badge>
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div>
          <h2>Looking for</h2>
          <MultiCarousel elements={teamData.roles}/>
        </div>

      </Card.Body>
      <Card.Footer>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
          {' '}
          {data}
        </Button>
        <Button
          onClick={handleOpen1}
        >
          click
        </Button>
        <Collapse in={open1}>
          <div>
            <h2>Team</h2>
            <Carousel>
              <Carousel.Item>
                <CardGroup>
                  {teamData.members.map((member) => <TeamCard key={member} memberData={member}/>)}
                </CardGroup>
              </Carousel.Item>
            </Carousel>
          </div>
        </Collapse>
      </Card.Footer>
      <RoleModal showRole={showRole} handleCloseRole={handleCloseRole} roleData={data}/>
      <TeamModal toggleState={show} handleClose={handleClose} data={data} />
    </Card>
  );
}

export default DashCard;
