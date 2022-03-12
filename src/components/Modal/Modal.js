/* eslint-disable indent */
import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { modalActions } from '../../Store/modalSlice/modalReducer'
import { modalApiCall } from '../../Store/modalSlice/modalActions'

import { Button, Form, Modal } from 'react-bootstrap'

import modalSetup from './Modal-Setup'

const NewModal = props => {
  const dispatch = useDispatch()
  const { modalSwitch } = modalActions

  const user = useSelector(state => state.auth.user)
  const { modalType, elementID, show } = useSelector(state => state.modal)

  const modalOptions = modalSetup(modalType)
  let { modalTitle, modalBody, apiCall, apiData, buttonText, danger } = modalOptions

  const handleSubmit = event => {
    event.preventDefault()

    apiData = {
      token: user.token,
      elementId: elementID,
      form: {}
    }

    if (event.currentTarget[0].id !== 'name') {
      for (const field of event.currentTarget) {
        if (field) {
          apiData.form[field.id] = field.value
        }
      }
    } else {
      apiData.form.name = event.currentTarget[0].value
    }

    dispatch(modalApiCall(apiCall, apiData))
  }

  return (
    <Modal
      show={show}
      onHide={() => dispatch(modalSwitch({ modalType: null, elementID: null }))}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className='mb-3'>{modalBody}</Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button
            type='reset'
            variant='secondary'
            onClick={() =>
              dispatch(modalSwitch({ modalType: null, elementID: null }))
            }
          >
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
