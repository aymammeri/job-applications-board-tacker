import { withRouter } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { signOutAction } from '../../Store/authSlice/authActions'

const SignOut = props => {
  const dispatch = useDispatch()

  dispatch(signOutAction())

  return ''
}

export default withRouter(SignOut)
