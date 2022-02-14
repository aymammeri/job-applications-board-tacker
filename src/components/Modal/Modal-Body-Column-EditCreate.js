import React from 'react'
import { Form } from 'react-bootstrap'

const ModalBody = props => (
  <>
    <Form.Label htmlFor='name'>{props}</Form.Label>
    <Form.Control
      type='text'
      id='name'
      aria-describedby='textHelpBlock'
      required
    />
  </>
)

export default ModalBody
