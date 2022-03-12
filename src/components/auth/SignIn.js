import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { signInAction } from '../../Store/authSlice/authActions'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const SignIn = props => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const credentials = { email, password }

  useEffect(() => {}, [credentials])

  const handleChange = event => {
    event.target.name === 'email'
      ? setEmail(event.target.value)
      : setPassword(event.target.value)
  }

  const onSignIn = async event => {
    event.preventDefault()

    await dispatch(signInAction(credentials))
    props.history.push('/')
  }

  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>Sign In</h3>
        <Form onSubmit={onSignIn}>
          <Form.Group controlId='email'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              type='email'
              name='email'
              value={credentials.email}
              placeholder='Enter email'
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              name='password'
              value={credentials.password}
              type='password'
              placeholder='Password'
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

export default withRouter(SignIn)
