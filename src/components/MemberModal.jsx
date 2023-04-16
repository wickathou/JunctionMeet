import React from 'react'
import { Badge, Button, Modal } from 'react-bootstrap'

function MemberModal({showMember, handleCloseMember}) {
  return (
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
  )
}

export default MemberModal