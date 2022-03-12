import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'

<<<<<<< HEAD
import { signOutAction } from '../../Store/authSlice/authActions'
=======
import { signOutAction } from '../../Store/authSlice/authThunks'
>>>>>>> cbfbd32 (Integrate Redux/toolkit and refactor codebase)

const SignOut = props => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.auth.user)
  dispatch(signOutAction(user))
  return (
    <>
    </>
  )
}

export default withRouter(SignOut)
