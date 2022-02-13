import React from 'react'
import { Form } from 'react-bootstrap'

const ModalBody = props => (
  <Form.Label>You are about to<b>{props.modalTitle}.</b> Are you sure ?</Form.Label>
)

export default ModalBody
