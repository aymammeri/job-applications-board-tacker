import * as authApi from '../../api/auth'

import store from '../rootStore'
import { userAuthActions } from './authReducer'
import { boardActions } from '../boardSlice/boardReducer'

export const signUpAction = credentials => {
  return dispatch => {
    const signUp = async () => {
      const response = await authApi.signUp(credentials)
      const user = response.data.user

      dispatch(userAuthActions.setUser(user))
    }
    try {
      signUp(credentials)
    } catch (error) {
      console.error(error)
    }
  }
}

export const signInAction = credentials => {
  return dispatch => {
    const signIn = async () => {
      const response = await authApi.signIn(credentials)

      const user = response.data.user
      const board = response.data.board

      dispatch(boardActions.setBoard(board))
      dispatch(userAuthActions.setUser(user))
    }
    try {
      signIn(credentials)
    } catch (error) {
      console.error(error)
    }
  }
}

export const signOutAction = () => {
  return dispatch => {
    const signOut = async () => {
      const token = store.getState().auth.user.token
      await authApi.signOut(token)
      dispatch(userAuthActions.clearUser())
    }
    try {
      signOut()
    } catch (error) {
      console.error(error)
    }
  }
}

export const changePasswordAction = (passwords) => {
  return () => {
    const changePass = async () => {
      const token = store.getState().auth.user.token
      authApi.changePassword(passwords, token)
    }
    try {
      changePass()
    } catch (error) {
      console.error(error)
    }
  }
}
