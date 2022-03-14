import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { signUpAction } from '../../Store/authSlice/authActions'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const SignUp = props => {
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const credentials = { email, password, passwordConfirmation }

  const handleChange = event => {
    event.target.name === 'email'
      ? setEmail(event.target.value)
      : event.target.name === 'password'
        ? setPassword(event.target.value)
        : setPasswordConfirmation(event.target.value)
  }

  const onSignUp = event => {
    event.preventDefault()

    dispatch(signUpAction(credentials))
    props.history.push('/sign-in')
  }

  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>Sign Up</h3>
        <Form onSubmit={onSignUp}>
          <Form.Group controlId='email'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              type='email'
              name='email'
              value={email}
              placeholder='Enter email'
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              name='password'
              value={password}
              type='password'
              placeholder='Password'
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId='passwordConfirmation'>
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control
              required
              name='passwordConfirmation'
              value={passwordConfirmation}
              type='password'
              placeholder='Confirm Password'
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default withRouter(SignUp)
