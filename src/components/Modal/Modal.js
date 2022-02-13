import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

import ModalBodyCreateEditColumn from './Modal-Body-Column-EditCreate'
import ModalBodyCreateEditCell from './Modal-Body-Cell-EditCreate'
import ModalBodyDelete from './Modal-Body-Delete'

const NewModal = props => {
  const modalType = props.modalType
  let [modalTitle, modalBody, buttonText, danger] = []

  if (modalType === 'create-column') {
    modalTitle = 'New Column'
    buttonText = 'Create Column'
    modalBody = ModalBodyCreateEditColumn('Enter Name')
  }
  if (modalType === 'create-cell') {
    modalTitle = 'New Cell'
    buttonText = 'Create Cell'
    modalBody = ModalBodyCreateEditCell('*')
  }
  if (modalType === 'edit-column') {
    modalTitle = 'Edit Column'
    buttonText = 'Submit'
    modalBody = ModalBodyCreateEditColumn('Enter New Name')
  }
  if (modalType === 'edit-cell') {
    modalTitle = 'Edit Cell'
    buttonText = 'Submit'
    modalBody = ModalBodyCreateEditCell('')
  }
  if (modalType === 'delete-column') {
    modalTitle = 'Delete The Column'
    buttonText = 'Confirm'
    modalBody = ModalBodyDelete(modalTitle)
    danger = true
  }
  if (modalType === 'delete-cell') {
    modalTitle = 'Delete The Cell'
    buttonText = 'Confirm'
    modalBody = ModalBodyDelete(modalTitle)
    danger = true
  }

  return (
    <Modal show={props.show} onHide={props.handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Form>
        <Modal.Body>
          <Form.Group className='mb-3' controlId='controlInput'>
            {modalBody}
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button type='reset' variant='secondary' onClick={props.handleClose}>
            Cancel
          </Button>
          <Button type='submit' variant={danger && 'danger'}>
            {buttonText}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default NewModal
