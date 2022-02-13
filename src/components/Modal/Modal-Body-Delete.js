import React from 'react'
import { Form } from 'react-bootstrap'

const ModalBody = title => (
  <Form.Label>You are about to<b>{title}.</b> Are you sure ?</Form.Label>
)

export default ModalBody
