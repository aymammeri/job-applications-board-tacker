import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  show: false,
  modalType: null,
<<<<<<< HEAD
  parentId: null
=======
  elementID: null
>>>>>>> cbfbd32 (Integrate Redux/toolkit and refactor codebase)
}

const modalSlice = createSlice({
  name: 'Modal',
  initialState,
  reducers: {
<<<<<<< HEAD
    modalSwitch (state, action) {
      state.modalType = action.payload.modalType
      state.parentId = action.payload.parentId
=======
    setupModal (state, action) {
      state.modalType = action.payload.modalType
      state.elementID = action.payload.elementID
>>>>>>> cbfbd32 (Integrate Redux/toolkit and refactor codebase)
      state.show = !state.show
    }
  }
})

export const modalActions = modalSlice.actions
export default modalSlice.reducer
