import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
<<<<<<< HEAD
import { changePasswordAction } from '../../Store/authSlice/authActions'
=======
import { changePasswordAction } from '../../Store/authSlice/authThunks'
>>>>>>> cbfbd32 (Integrate Redux/toolkit and refactor codebase)

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const ChangePassword = props => {
  const dispatch = useDispatch()

  const user = useSelector(state => state.auth.user)
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const credentials = { oldPassword, newPassword }

  useEffect(() => {}, [credentials])

  const handleChange = event => {
    event.target.name === 'oldPassword'
      ? setOldPassword(event.target.value)
      : setNewPassword(event.target.value)
  }

  const onChangePassword = event => {
    event.preventDefault()

    dispatch(changePasswordAction(user, credentials))
    props.history.push('/')
  }

  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>Change Password</h3>
        <Form onSubmit={onChangePassword}>
          <Form.Group controlId='oldPassword'>
            <Form.Label>Old password</Form.Label>
            <Form.Control
              required
              name='oldPassword'
              value={oldPassword}
              type='password'
              placeholder='Old Password'
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId='newPassword'>
            <Form.Label>New Password</Form.Label>
            <Form.Control
              required
              name='newPassword'
              value={newPassword}
              type='password'
              placeholder='New Password'
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

export default withRouter(ChangePassword)
