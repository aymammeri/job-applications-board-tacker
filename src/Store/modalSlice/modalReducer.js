import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  show: false,
  modalType: null,
  elementID: null
}

const modalSlice = createSlice({
  name: 'Modal',
  initialState,
  reducers: {
    modalSwitch (state, action) {
      state.modalType = action.payload.modalType
      state.elementID = action.payload.elementID
      state.show = !state.show
    }
  }
})

export const modalActions = modalSlice.actions
export default modalSlice.reducer
