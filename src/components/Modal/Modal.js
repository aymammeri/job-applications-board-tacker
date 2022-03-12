/* eslint-disable indent */
import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { modalActions } from '../../Store/modalSlice/modalReducer'
<<<<<<< HEAD
import { modalApiCall } from '../../Store/modalSlice/modalActions'

import { Button, Form, Modal } from 'react-bootstrap'

import modalSetup from './Modal-Setup'

const NewModal = props => {
  const dispatch = useDispatch()
  const { modalSwitch } = modalActions

  const user = useSelector(state => state.auth.user)
  const { modalType, parentId, show } = useSelector(state => state.modal)

  const modalOptions = modalSetup(modalType)
  let { modalTitle, modalBody, apiCall, apiData, buttonText, danger } = modalOptions
=======
import { modalApiCall } from '../../Store/modalSlice/modalThunk'

import { Button, Form, Modal } from 'react-bootstrap'

import modalSwitch from './ModalSetup'

const NewModal = props => {
  const dispatch = useDispatch()
  const setupModal = modalActions.setupModal

  const user = useSelector(state => state.auth.user)
  const { modalType, elementID, show } = useSelector(state => state.modal)

  const modalOptions = modalSwitch(modalType)
  let { modalTitle, modalBody, apiCall, apiData, buttonText, danger } =
    modalOptions
>>>>>>> cbfbd32 (Integrate Redux/toolkit and refactor codebase)

  const handleSubmit = event => {
    event.preventDefault()

    apiData = {
      token: user.token,
<<<<<<< HEAD
      parentId,
=======
      elementId: elementID,
>>>>>>> cbfbd32 (Integrate Redux/toolkit and refactor codebase)
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
<<<<<<< HEAD
      onHide={() => dispatch(modalSwitch({ modalType: null, parentId: null }))}
=======
      onHide={() => dispatch(setupModal({ modalType: null, elementID: null }))}
>>>>>>> cbfbd32 (Integrate Redux/toolkit and refactor codebase)
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
<<<<<<< HEAD
              dispatch(modalSwitch({ modalType: null, parentId: null }))
=======
              dispatch(setupModal({ modalType: null, elementID: null }))
>>>>>>> cbfbd32 (Integrate Redux/toolkit and refactor codebase)
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
