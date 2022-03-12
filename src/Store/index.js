import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice/authReducer'
import boardReducer from './boardSlice/boardReducer'
import modalReducer from './modalSlice/modalReducer'

const store = configureStore({
  reducer: { auth: authReducer, board: boardReducer, modal: modalReducer }
})

export default store
