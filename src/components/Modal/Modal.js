import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

// import ModalBodyCreate from './Modal-Body-Create'
// import ModalBodyEdit from './Modal-Body-Edit'
import ModalBodyDelete from './Modal-Body-Delete'

const NewModal = props => {
  const modalType = props.modalType
  let [modalTitle, buttonText, danger] = []

  if (modalType === 'create-column') {
    modalTitle = 'New Column'
    buttonText = 'Create Column'
  }
  if (modalType === 'create-cell') {
    modalTitle = 'New Cell'
    buttonText = 'Create Cell'
  }
  if (modalType === 'edit-column') {
    modalTitle = 'Edit Column'
    buttonText = 'Submit'
  }
  if (modalType === 'edit-cell') {
    modalTitle = 'Edit Cell'
    buttonText = 'Submit'
  }
  if (modalType === 'delete-column') {
    modalTitle = 'Delete The Column'
    buttonText = 'Confirm'
    danger = true
  }
  if (modalType === 'delete-cell') {
    modalTitle = 'Delete The Cell'
    buttonText = 'Confirm'
    danger = true
  }

  return (
    <Modal show={props.show} onHide={props.handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Form>
        <Modal.Body><ModalBodyDelete modalTitle={modalTitle} /></Modal.Body>
        <Modal.Footer>
          <Button type='reset' variant='secondary' onClick={props.handleClose}>
            Cancel
          </Button>
          <Button
            type='submit'
            variant={danger && 'danger'}
            onClick={props.handleClose}
          >
            {buttonText}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default NewModal
