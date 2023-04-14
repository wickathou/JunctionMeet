import { Badge, Button, Card, CardGroup, Carousel, Col, Container, FloatingLabel, Form, Image, ListGroup, Modal, Nav, NavDropdown, Navbar, ProgressBar, Row, Tab } from 'react-bootstrap';
import './App.scss';
import Header from './components/Header';
import Main from './components/Main';
import UserDisplay from './components/UserDisplay';
import endDesignLogo from './assets/logo.svg';
import { useState } from 'react';


function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showRole, setShowRole] = useState(false);

  const handleCloseRole = () => setShowRole(false);
  const handleShowRole = () => setShowRole(true);

  const [showMember, setShowMember] = useState(false);

  const handleCloseMember = () => setShowMember(false);
  const handleShowMember = () => setShowMember(true);


  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand><img src={endDesignLogo} alt="End Design logo" width="100px" height="100px" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex align-items-center">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Image className='userIconThumbnail' roundedCircle src={endDesignLogo} />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className='d-flex justify-content-between align-items-center'>
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
      
      <Container>
        <CardGroup>

          <Card>
            <Card.Header className='d-flex align-items-center justify-content-between'>
              {/* <Image className='userIconThumbnail' roundedCircle src={endDesignLogo} /> */}
              <Card.Img className='userIconThumbnail' roundedCircle src={endDesignLogo} />
              <Card.Title>
                Awesomness
                <Badge bg="primary">#Fazer</Badge>
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
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
                          <Button onClick={handleShowRole} >Apply</Button>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link2">
                          <p>Some text Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, sequi. Perspiciatis sit, eum porro corrupti quidem iste in amet suscipit, et debitis at ab a? Illo fugiat obcaecati quidem rerum.</p>
                          <Button onClick={handleShowRole} >Apply</Button>
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
              </div>


            </Card.Body>
            <Card.Footer>
              <Button variant="primary">Request to Join</Button>
              <Button variant="primary" onClick={handleShow}>
                Launch demo modal
              </Button>

              

            </Card.Footer>
          </Card>

          <Card>
            <Card.Header className='d-flex align-items-center justify-content-between'>
              {/* <Image className='userIconThumbnail' roundedCircle src={endDesignLogo} /> */}
              <Card.Img className='userIconThumbnail' roundedCircle src={endDesignLogo} />
              <Card.Title>
                Awesomness
                <Badge bg="primary">#Fazer</Badge>
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>


              <CardGroup>
                <Card className='teamMemberCard'>
                  <Image fluid rounded src={endDesignLogo} />
                  <Card.Body>
                    <Card.Title>Person Named</Card.Title>
                    <Card.Text>
                      Role
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className='teamMemberCard'>
                  <Image fluid rounded src={endDesignLogo} />
                  <Card.Body>
                    <Card.Title>Person Named</Card.Title>
                    <Card.Text>
                      Role
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className='teamMemberCard'>
                  <Image fluid rounded src={endDesignLogo} />
                  <Card.Body>
                    <Card.Title>Person Named</Card.Title>
                    <Card.Text>
                      Role
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardGroup>


            </Card.Body>
            <Card.Footer>
              <Button variant="primary">Request to Join</Button>

            </Card.Footer>
          </Card>

          <Card>
            <Card.Header className='d-flex align-items-center justify-content-between'>
              {/* <Image className='userIconThumbnail' roundedCircle src={endDesignLogo} /> */}
              <Card.Img className='userIconThumbnail' roundedCircle src={endDesignLogo} />
              <Card.Title>
                Awesomness
                <Badge bg="primary">#Fazer</Badge>
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>


              <CardGroup>
                <Card className='teamMemberCard'>
                  <Image fluid rounded src={endDesignLogo} />
                  <Card.Body>
                    <Card.Title>Person Named</Card.Title>
                    <Card.Text>
                      Role
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className='teamMemberCard'>
                  <Image fluid rounded src={endDesignLogo} />
                  <Card.Body>
                    <Card.Title>Person Named</Card.Title>
                    <Card.Text>
                      Role
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className='teamMemberCard'>
                  <Image fluid rounded src={endDesignLogo} />
                  <Card.Body>
                    <Card.Title>Person Named</Card.Title>
                    <Card.Text>
                      Role
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardGroup>


            </Card.Body>
            <Card.Footer>
              <Button variant="primary">Request to Join</Button>

            </Card.Footer>
          </Card>

        </CardGroup>
      </Container>
      <Modal show={show} size='lg' fullscreen='lg-down' onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Awesomness
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
                      <Button onClick={handleShowRole} >Apply</Button>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#link2">
                      <p>Some text Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, sequi. Perspiciatis sit, eum porro corrupti quidem iste in amet suscipit, et debitis at ab a? Illo fugiat obcaecati quidem rerum.</p>
                      <Button onClick={handleShowRole} >Apply</Button>
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
                  <Card className='teamMemberCard'>
                    <Image fluid rounded src={endDesignLogo} />
                    <Card.Body>
                      <Card.Title>Person Named</Card.Title>
                      <Card.Text>
                        Role
                      </Card.Text>
                      <Button onClick={handleShowMember} variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                  <Card className='teamMemberCard'>
                    <Image fluid rounded src={endDesignLogo} />
                    <Card.Body>
                      <Card.Title>Person Named</Card.Title>
                      <Card.Text>
                        Role
                      </Card.Text>
                      <Button  onClick={handleShowMember} variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                  <Card className='teamMemberCard'>
                    <Image fluid rounded src={endDesignLogo} />
                    <Card.Body>
                      <Card.Title>Person Named</Card.Title>
                      <Card.Text>
                        Role
                      </Card.Text>
                      <Button  onClick={handleShowMember} variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Carousel.Item>
              <Carousel.Item>
                <CardGroup>
                  <Card className='teamMemberCard'>
                    <Image fluid rounded src={endDesignLogo} />
                    <Card.Body>
                      <Card.Title>Person Named</Card.Title>
                      <Card.Text>
                        Role
                      </Card.Text>
                      <Button  onClick={handleShowMember} variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                  <Card className='teamMemberCard'>
                    <Image fluid rounded src={endDesignLogo} />
                    <Card.Body>
                      <Card.Title>Person Named</Card.Title>
                      <Card.Text>
                        Role
                      </Card.Text>
                      <Button  onClick={handleShowMember} variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                  <Card className='teamMemberCard'>
                    <Image fluid rounded src={endDesignLogo} />
                    <Card.Body>
                      <Card.Title>Person Named</Card.Title>
                      <Card.Text>
                        Role
                      </Card.Text>
                      <Button  onClick={handleShowMember} variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Carousel.Item>
              <Carousel.Item>
                <CardGroup>
                  <Card className='teamMemberCard'>
                    <Image fluid rounded src={endDesignLogo} />
                    <Card.Body>
                      <Card.Title>Person Named</Card.Title>
                      <Card.Text>
                        Role
                      </Card.Text>
                      <Button  onClick={handleShowMember} variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                  <Card className='teamMemberCard'>
                    <Image fluid rounded src={endDesignLogo} />
                    <Card.Body>
                      <Card.Title>Person Named</Card.Title>
                      <Card.Text>
                        Role
                      </Card.Text>
                      <Button  onClick={handleShowMember} variant="primary">Go somewhere</Button>
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
      <Modal show={showRole} size='lg' fullscreen='lg-down' onHide={handleCloseRole}>
        <Modal.Header closeButton>
          <div>
            <Modal.Title>Awesomness
              <Badge bg="primary">#Fazer</Badge>
            </Modal.Title>
            <h2>Apply</h2>
          </div>
        </Modal.Header>
        <Modal.Body>
            <ProgressBar animated now={45} />
          <p>This is an application modal!</p>
          <div>
            <h2></h2>
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
              <Row>
                <Col sm={4}>
                  <ListGroup>
                    <ListGroup.Item action href="#link1">
                      Question 1
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link2">
                      Question 2
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link3">
                      Question 3
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col sm={8}>
                  <Tab.Content>
                    <Tab.Pane eventKey="#link1">
                      <p>Some text Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, sequi. Perspiciatis sit, eum porro corrupti quidem iste in amet suscipit, et debitis at ab a? Illo fugiat obcaecati quidem rerum.</p>
                      <Form>
                        <Form.Check 
                          type="switch"
                          id="custom-switch"
                          label="Check this switch"
                        />
                        <Button variant="primary" type="submit">
                          Submit
                        </Button>
                      </Form>
                      <Button>Next</Button>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#link2">
                      <p>Some text Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, sequi. Perspiciatis sit, eum porro corrupti quidem iste in amet suscipit, et debitis at ab a? Illo fugiat obcaecati quidem rerum.</p>
                      <FloatingLabel controlId="floatingTextarea2" label="Comments">
                        <Form.Control
                          as="textarea"
                          placeholder="Leave a comment here"
                          style={{ height: '100px' }}
                        />
                      </FloatingLabel>
                      <Button>Apply</Button>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#link3">
                      <p>Some text Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, sequi. Perspiciatis sit, eum porro corrupti quidem iste in amet suscipit, et debitis at ab a? Illo fugiat obcaecati quidem rerum.</p>
                      <Form>
                        <div key='inline-radio' className="mb-3">
                          <Form.Check
                            inline
                            label="Answer 1"
                            name="group1"
                            type='radio'
                            id='inline-radio-1'
                          />
                          <Form.Check
                            inline
                            label="Answer 2"
                            name="group1"
                            type='radio'
                            id='inline-radio-2'
                          />
                          <Form.Check
                            inline
                            label="Answer 3"
                            name='group1'
                            type='radio'
                            id='inline-radio-3'
                          />
                        </div>
                      </Form>
                      <Button>Apply</Button>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseRole}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseRole}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showMember} size='md' fullscreen='lg-down' onHide={handleCloseMember}>
        <Modal.Header closeButton>
          <Modal.Title>Awesomness
            <Badge bg="primary">#Fazer</Badge>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Woohoo, you're reading this text in a modal!</p>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseMember}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseMember}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default App;
