import { withRouter } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { signOutAction } from '../../Store/authSlice/authActions'

const SignOut = props => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.auth.user)

  dispatch(signOutAction(user))

  return ''
}

export default withRouter(SignOut)
