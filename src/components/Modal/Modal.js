import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const NewModal = props => {
  const modalType = props.modalType
  let ModalToRender

  if (modalType === 'create-column') {
    ModalToRender = (
      <Modal
        show={props.show}
        onHide={props.handleClose}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Create Column Modal</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={props.handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={props.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
  if (modalType === 'create-cell') {
    ModalToRender = (
      <Modal
        show={props.show}
        onHide={props.handleClose}
        animation={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Create Cell Modal!</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={props.handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={props.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
  if (modalType === 'edit-column') {
    ModalToRender = (
      <Modal
        show={props.show}
        onHide={props.handleClose}
        animation={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Edit Column Modal</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={props.handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={props.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
  if (modalType === 'edit-cell') {
    ModalToRender = (
      <Modal
        show={props.show}
        onHide={props.handleClose}
        animation={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Edit Cell Modal</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={props.handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={props.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
  return <>{ModalToRender}</>
}

export default NewModal
