import React from 'react';
import {
  Button, Card, Col, Image, ListGroup, Row, Tab,
} from 'react-bootstrap';
import endDesignLogo from '../assets/logo.svg';

function RolesPreview({ handleShowRole }) {
  return (
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
      <Row>
        <Col sm={12} xl={4}>
          <ListGroup>
            <ListGroup.Item className="d-flex justify-content-between align-items-center" action href="#link1">
              Link 1
              <Button className="d-xl-none" onClick={handleShowRole}>Apply</Button>
            </ListGroup.Item>
            <ListGroup.Item action href="#link2">
              Link 2
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col xl={8} className="d-none d-xl-block">
          <Tab.Content>
            <Tab.Pane eventKey="#link1">
              <p>Some text Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, sequi. Perspiciatis sit, eum porro corrupti quidem iste in amet suscipit, et debitis at ab a? Illo fugiat obcaecati quidem rerum.</p>
              <Button onClick={handleShowRole}>Apply</Button>
            </Tab.Pane>
            <Tab.Pane eventKey="#link2">
              <p>Some text Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, sequi. Perspiciatis sit, eum porro corrupti quidem iste in amet suscipit, et debitis at ab a? Illo fugiat obcaecati quidem rerum.</p>
              <Button onClick={handleShowRole}>Apply</Button>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default RolesPreview;
