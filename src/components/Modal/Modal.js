/* eslint-disable indent */
import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

import ModalBodyCreateEditColumn from './Modal-Body-Column-EditCreate'
import ModalBodyCreateEditCell from './Modal-Body-Cell-EditCreate'
import ModalBodyDelete from './Modal-Body-Delete'
import { getBoard } from '../../api/crud'

const NewModal = props => {
  // eslint-disable-next-line no-unused-vars
  const { modalType, elementId, apiCall, user, setBoard } = props
  let [modalTitle, modalBody, apiData, buttonText, danger] = []

  switch (modalType) {
    case 'create-column':
      modalTitle = 'New Column'
      buttonText = 'Create Column'
      modalBody = ModalBodyCreateEditColumn('Enter Name')
      break
    case 'create-cell':
      modalTitle = 'New Cell'
      buttonText = 'Create Cell'
      modalBody = ModalBodyCreateEditCell('*')
      break
    case 'edit-column':
      modalTitle = 'Rename Column'
      buttonText = 'Submit'
      modalBody = ModalBodyCreateEditColumn('Enter New Name')
      break
    case 'edit-cell':
      modalTitle = 'Edit Cell'
      buttonText = 'Submit'
      modalBody = ModalBodyCreateEditCell('')
      break
    case 'delete-column':
      modalTitle = 'Delete The Column'
      buttonText = 'Confirm'
      modalBody = ModalBodyDelete(modalTitle)
      danger = true
      break
    case 'delete-cell':
      modalTitle = 'Delete The Cell'
      buttonText = 'Confirm'
      modalBody = ModalBodyDelete(modalTitle)
      danger = true
      break
  }

  const handleSubmit = event => {
    event.preventDefault()
    apiData = {
      token: user.token,
      elementId,
      form: {}
    }
    if (event.currentTarget[0].id !== 'name') {
      // apiData.form.companyName = event.currentTarget
    } else {
      apiData.form.name = event.currentTarget[0].value
    }
    const callApi = async () => {
      await apiCall(apiData)
      const updatedBoard = await getBoard(user)
      await setBoard(updatedBoard)
      props.handleClose()
    }

    callApi()
  }

  return (
    <Modal show={props.show} onHide={props.handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className='mb-3'>{modalBody}</Form.Group>
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
