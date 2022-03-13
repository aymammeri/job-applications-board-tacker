import { getBoard } from '../../api/crud'
import { boardActions } from '../boardSlice/boardReducer'
import { modalActions } from './modalReducer'

export const modalApiCall = (crud, data) => {
  return async dispatch => {
    try {
      await crud(data)
      const response = await getBoard(data.token)
      dispatch(boardActions.setBoard(response.data.board))
      dispatch(modalActions.modalSwitch({ modalType: null, elementId: null }))
    } catch (error) {
      console.error(error)
    }
  }
}
