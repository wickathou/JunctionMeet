import {
  Badge, Button, Card, CardGroup, Carousel, Col, Collapse, Container, FloatingLabel, Form, Image, ListGroup, Modal, Nav, NavDropdown, Navbar, ProgressBar, Row, Tab,
} from 'react-bootstrap';
import './App.scss';
import { useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import MultiCarousel from 'react-multi-carousel';
import Header from './components/Header';
import Main from './components/Main';
import UserDisplay from './components/UserDisplay';
import endDesignLogo from './assets/logo.svg';
import 'react-multi-carousel/lib/styles.css';
import NavFilters from './components/NavFilters';
import DashCard from './components/DashCard';

function App() {
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

  const testArray = [1, 2, 3];

  return (
    <>
      <Header />

      <NavFilters />
      <Container>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 1000: 3 }}>
          <Masonry gutter="20px">
            {testArray.map((item) => <DashCard key={item} data={item} />)}
          </Masonry>
        </ResponsiveMasonry>
      </Container>

      <Modal show={showMember} size="md" fullscreen="lg-down" onHide={handleCloseMember}>
        <Modal.Header closeButton>
          <Modal.Title>
            Awesomness
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
