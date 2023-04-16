import {
  Badge, Button, Card, CardGroup, Carousel, Col, Collapse, Container, FloatingLabel, Form, Image, ListGroup, Modal, Nav, NavDropdown, Navbar, ProgressBar, Row, Tab,
} from 'react-bootstrap';
import './App.scss';
import { useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import MultiCarousel from 'react-multi-carousel';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import UserDisplay from './components/UserDisplay';
import endDesignLogo from './assets/logo.svg';
import 'react-multi-carousel/lib/styles.css';
import NavFilters from './components/NavFilters';
import DashCard from './components/DashCard';
import Layout from './components/Layout';
import UserDashboard from './pages/UserDashboard';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<UserDashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
