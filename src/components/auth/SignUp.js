import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

<<<<<<< HEAD
import { signUp } from '../../api/auth'
import { signUpSuccess, signUpFailure } from '../AutoDismissAlert/messages'
=======
import { useDispatch } from 'react-redux'
import { signUpAction } from '../../Store/authSlice/authActions'
>>>>>>> dev

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const SignUp = props => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const credentials = { email, password, passwordConfirmation }

  useEffect(() => {}, [credentials])

  const handleChange = event => {
    event.target.name === 'email' && setEmail(event.target.value)
    event.target.name === 'password' && setPassword(event.target.value)
    event.target.name === 'passwordConfirmation' && setPasswordConfirmation(event.target.value)
  }

  const onSignUp = event => {
    event.preventDefault()

<<<<<<< HEAD
onSignUp = (event) => {
  event.preventDefault()

  const { msgAlert, history } = this.props

  signUp(this.state)
    .then(() =>
      msgAlert({
        heading: 'Sign Up Success',
        message: signUpSuccess,
        variant: 'success'
      })
    )
    .then(() => history.push('/sign-in'))
    .catch((error) => {
      this.setState({ email: '', password: '', passwordConfirmation: '' })
      msgAlert({
        heading: 'Sign Up Failed with error: ' + error.message,
        message: signUpFailure,
        variant: 'danger'
      })
    })
}

render () {
  const { email, password, passwordConfirmation } = this.state
=======
    dispatch(signUpAction(credentials))
    props.history.push('/')
  }
>>>>>>> dev

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
