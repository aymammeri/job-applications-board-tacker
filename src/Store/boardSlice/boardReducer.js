import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  board: null
}

const boardSlice = createSlice({
  name: 'Board',
  initialState,
  reducers: {
    setBoard (state, action) {
      state.board = action.payload
    },
    addColumn (state, action) {
      state.board.push(action.payload)
    },
    editColumn (state, action) {
      state.board[action.payload.index] = action.payload.newColumn
    },
    deleteColumn (state, action) {
      state.board.splice(action.payload, 1)
    },
    addCell (state, action) {
      state.board[action.payload.columnID].push(action.payload)
    },
    editCell (state, action) {
      state.board[action.payload.columnID] = action.payload.newCell
    },
    deleteCell (state, action) {
      state.board[action.payload.columnID].splice(action.payload, 1)
    }
  }
})

export const boardActions = boardSlice.actions
export default boardSlice.reducer
