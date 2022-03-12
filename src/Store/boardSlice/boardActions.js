import store from '../../Store'
// eslint-disable-next-line no-unused-vars
import { move } from '../../api/crud'
import { boardActions } from './boardReducer'

export const moveCells = data => {
  return async dispatch => {
    const token = store.getState().auth.user.token
    dispatch(boardActions.move({ ...data }))
    move({ token, ...data })
  }
}
