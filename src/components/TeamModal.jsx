import React from 'react';
import {
  Badge, Button, Card, CardGroup, Carousel, Col, Image, ListGroup, Modal, Row, Tab,
} from 'react-bootstrap';
import endDesignLogo from '../assets/logo.svg';

function TeamModal({ toggleState, handleClose, data }) {
  return (
    <Modal show={toggleState} size="lg" fullscreen="lg-down" onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          Awesomness
          {' '}
          {data}
          <Badge bg="primary">#Fazer</Badge>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Woohoo, you're reading this text in a modal!</p>
        <div>
          <h2>Looking for</h2>
          <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
            <Row>
              <Col sm={4}>
                <ListGroup>
                  <ListGroup.Item action href="#link1">
                    Link 1
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link2">
                    Link 2
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col sm={8}>
                <Tab.Content>
                  <Tab.Pane eventKey="#link1">
                    <p>Some text Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, sequi. Perspiciatis sit, eum porro corrupti quidem iste in amet suscipit, et debitis at ab a? Illo fugiat obcaecati quidem rerum.</p>
                    <Button>Apply</Button>
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link2">
                    <p>Some text Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, sequi. Perspiciatis sit, eum porro corrupti quidem iste in amet suscipit, et debitis at ab a? Illo fugiat obcaecati quidem rerum.</p>
                    <Button>Apply</Button>
                  </Tab.Pane>
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
                <Card className="teamMemberCard">
                  <Image fluid rounded src={endDesignLogo} />
                  <Card.Body>
                    <Card.Title>Person Named</Card.Title>
                    <Card.Text>
                      Role
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
                <Card className="teamMemberCard">
                  <Image fluid rounded src={endDesignLogo} />
                  <Card.Body>
                    <Card.Title>Person Named</Card.Title>
                    <Card.Text>
                      Role
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
                <Card className="teamMemberCard">
                  <Image fluid rounded src={endDesignLogo} />
                  <Card.Body>
                    <Card.Title>Person Named</Card.Title>
                    <Card.Text>
                      Role
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </CardGroup>
            </Carousel.Item>
            <Carousel.Item>
              <CardGroup>
                <Card className="teamMemberCard">
                  <Image fluid rounded src={endDesignLogo} />
                  <Card.Body>
                    <Card.Title>Person Named</Card.Title>
                    <Card.Text>
                      Role
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
                <Card className="teamMemberCard">
                  <Image fluid rounded src={endDesignLogo} />
                  <Card.Body>
                    <Card.Title>Person Named</Card.Title>
                    <Card.Text>
                      Role
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
                <Card className="teamMemberCard">
                  <Image fluid rounded src={endDesignLogo} />
                  <Card.Body>
                    <Card.Title>Person Named</Card.Title>
                    <Card.Text>
                      Role
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </CardGroup>
            </Carousel.Item>
            <Carousel.Item>
              <CardGroup>
                <Card className="teamMemberCard">
                  <Image fluid rounded src={endDesignLogo} />
                  <Card.Body>
                    <Card.Title>Person Named</Card.Title>
                    <Card.Text>
                      Role
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
                <Card className="teamMemberCard">
                  <Image fluid rounded src={endDesignLogo} />
                  <Card.Body>
                    <Card.Title>Person Named</Card.Title>
                    <Card.Text>
                      Role
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
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
