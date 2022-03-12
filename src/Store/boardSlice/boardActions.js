import store from '../rootStore'

import { move } from '../../api/crud'
import { boardActions } from './boardReducer'

export const moveCells = data => {
  return async dispatch => {
    const token = store.getState().auth.user.token
    dispatch(boardActions.move({ ...data }))
    move({ token, ...data })
  }
}
