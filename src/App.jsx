import { Badge, Button, Card, CardGroup, Container, Image, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import './App.scss';
import Header from './components/Header';
import Main from './components/Main';
import UserDisplay from './components/UserDisplay';
import endDesignLogo from './assets/logo.svg';


function App() {
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

          <Card style={{ width: '18rem' }}>
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

          <Card style={{ width: '18rem' }}>
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

          <Card style={{ width: '18rem' }}>
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
    </>
  );
}

export default App;
