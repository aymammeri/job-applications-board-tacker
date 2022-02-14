import React from 'react'
import { Form, FloatingLabel } from 'react-bootstrap'

const ModalBody = props => (
  <>
    <FloatingLabel htmlFor='companyName' label={`Company Name${props}`}>
      <Form.Control
        size='sm'
        type='text'
        id='companyName'
        aria-describedby='textHelpBlock'
        placeholder='1'
        required={props === '*'}
      />
    </FloatingLabel>
    <FloatingLabel htmlFor='positionTitle' label={`Position Title${props}`}>
      <Form.Control
        size='sm'
        type='text'
        id='positionTitle'
        aria-describedby='textHelpBlock'
        placeholder='1'
        required={props === '*'}
      />
    </FloatingLabel>
    <FloatingLabel htmlFor='location' label={`Location${props}`}>
      <Form.Control
        size='sm'
        type='text'
        id='location'
        aria-describedby='textHelpBlock'
        placeholder='1'
        required={props === '*'}
      />
    </FloatingLabel>
    <FloatingLabel htmlFor='contactName' label='Contact Name'>
      <Form.Control
        size='sm'
        type='text'
        id='contactName'
        aria-describedby='textHelpBlock'
        placeholder='1'
      />
    </FloatingLabel>
    <FloatingLabel htmlFor='contactTitle' label='Contact Title'>
      <Form.Control
        size='sm'
        type='text'
        id='contactTitle'
        aria-describedby='textHelpBlock'
        placeholder='1'
      />
    </FloatingLabel>
    <FloatingLabel htmlFor='contactEmail' label='Contact Email'>
      <Form.Control
        size='sm'
        type='email'
        id='contactEmail'
        aria-describedby='emailHelpBlock'
        placeholder='1'
      />
    </FloatingLabel>
    <FloatingLabel htmlFor='description' label='Description'>
      <Form.Control
        id='description'
        as='textarea'
        placeholder='Write a description here'
        style={{ height: '150px' }}
      />
    </FloatingLabel>
  </>
)

export default ModalBody
