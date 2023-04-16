import React, { useEffect, useState } from 'react';
import {
  Badge, Button, Card, CardGroup, Carousel, Col, Collapse, Image, ListGroup, Row, Tab,
} from 'react-bootstrap';
import MultiCarousel from './MultiCarousel';
import icon from '../assets/favicon.png';
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
  const handleOpen1 = () => setOpen1(!open1);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showRole, setShowRole] = useState(false);

  const handleCloseRole = () => setShowRole(false);
  const handleShowRole = () => setShowRole(true);

  const [showMember, setShowMember] = useState(false);

  const handleCloseMember = () => setShowMember(false);
  const handleShowMember = () => setShowMember(true);

  const {
    name, members, challenge, roles,
  } = data;

  return (
    <Card>
      <Card.Header className="d-flex align-items-center justify-content-between">
        <Card.Img className="userIconThumbnail" src={icon} />
        <Card.Title>
          {name}
          <Badge className="ms-1" bg="primary">{challenge ? `#${challenge}` : 'No challenge'}</Badge>
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div>
          <h2>Looking for</h2>
          <MultiCarousel elements={roles} />
          <Button className="mt-2" onClick={handleShowRole}>Apply</Button>
        </div>

      </Card.Body>
      <Card.Footer>
        <Button variant="primary" onClick={handleShow}>
          Learn more
        </Button>
        <Button
          className="ms-1"
          onClick={handleOpen1}
        >
          Team
        </Button>
        <Collapse in={open1}>
          <div>
            <h2>Team</h2>
            <Carousel>
              <Carousel.Item>
                <CardGroup>
                  {members.map((member, index) => <TeamCard key={index} memberData={member} />)}
                </CardGroup>
              </Carousel.Item>
            </Carousel>
          </div>
        </Collapse>
      </Card.Footer>
      <RoleModal showRole={showRole} handleCloseRole={handleCloseRole} data={data} />
      <TeamModal toggleState={show} handleClose={handleClose} data={data} />
    </Card>
  );
}

export default DashCard;
