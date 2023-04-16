import React from 'react';
import {
  Badge, Button, Col, FloatingLabel, Form, ListGroup, Modal, ProgressBar, Row, Tab,
} from 'react-bootstrap';

function RoleModal({ showRole, handleCloseRole, data }) {
  const { name, challenge } = data;
  return (
    <Modal show={showRole} size="lg" fullscreen="lg-down" onHide={handleCloseRole}>
      <Modal.Header closeButton>
        <div>
          <Modal.Title>
            {name}
            <Badge className='ms-1' bg="primary">#{challenge}</Badge>
          </Modal.Title>
          <h2>Apply</h2>
        </div>
      </Modal.Header>
      <Modal.Body>
        <ProgressBar animated now={45} />
        <p>This is an application modal!</p>
        <div>
          <h2 />
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
                      <div className='mt-1'>
                        <Button variant="primary">
                          Submit
                        </Button>
                        <Button className='ms-1'>Next</Button>
                      </div>
                    </Form>
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
                    <div className='mt-1'>
                        <Button variant="primary">
                          Submit
                        </Button>
                        <Button className='ms-1'>Next</Button>
                      </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link3">
                    <p>Some text Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, sequi. Perspiciatis sit, eum porro corrupti quidem iste in amet suscipit, et debitis at ab a? Illo fugiat obcaecati quidem rerum.</p>
                    <Form>
                      <div key="inline-radio" className="mb-3">
                        <Form.Check
                          inline
                          label="Answer 1"
                          name="group1"
                          type="radio"
                          id="inline-radio-1"
                        />
                        <Form.Check
                          inline
                          label="Answer 2"
                          name="group1"
                          type="radio"
                          id="inline-radio-2"
                        />
                        <Form.Check
                          inline
                          label="Answer 3"
                          name="group1"
                          type="radio"
                          id="inline-radio-3"
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
  );
}

export default RoleModal;
