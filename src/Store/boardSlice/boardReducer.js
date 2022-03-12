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
    },
    move (state, action) {
      const sourceCol = state.board.columns.find(col => col._id === action.payload.source.droppableId)
      const [removed] = sourceCol.cells.splice(action.payload.source.index, 1)
      const destinationCol = state.board.columns.find(col => col._id === action.payload.destination.droppableId)
      destinationCol.cells.splice(action.payload.destination.index, 0, removed)
    }
  }
})

export const boardActions = boardSlice.actions
export default boardSlice.reducer
