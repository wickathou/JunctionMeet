import React from 'react';
import {
  Badge, Button, Card, CardGroup, Carousel, Col, Image, ListGroup, Modal, Row, Tab,
} from 'react-bootstrap';
import endDesignLogo from '../assets/logo.svg';
import TeamCard from './TeamCard';

function TeamModal({ toggleState, handleClose, data }) {
  const {name, members, challenge, roles} = data

  return (
    <Modal show={toggleState} size="lg" fullscreen="lg-down" onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {name}
          <Badge className='ms-1' bg="primary">#{challenge}</Badge>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Woohoo, you're reading this text in a modal!</p>
        <div>
          <h2>Looking for</h2>
          <Tab.Container id="list-group-tabs-example" defaultActiveKey={`#${roles[0]}0`}>
            <Row>
              <Col sm={4}>
                <ListGroup>
                  {roles.map((role,index) => <ListGroup.Item key={index} action href={`#${role}${index}`}>
                    {role}
                  </ListGroup.Item>)}
                </ListGroup>
              </Col>
              <Col sm={8}>
                <Tab.Content>
                  {roles.map((role,index) => <Tab.Pane key={index} eventKey={`#${role}${index}`}>
                    <p><strong>{role}</strong> text Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, sequi. Perspiciatis sit, eum porro corrupti quidem iste in amet suscipit, et debitis at ab a? Illo fugiat obcaecati quidem rerum.</p>
                    <Button key={index}>Apply to {role}</Button>
                  </Tab.Pane>)}
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
        <div>
          <h2>Team</h2>
          <Carousel>
            <Carousel.Item>
              <CardGroup>
                {members.map((member,index) => <TeamCard key={index} memberData={member} />)}
              </CardGroup>
            </Carousel.Item>
          </Carousel>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default TeamModal;
