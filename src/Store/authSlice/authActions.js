import * as authApi from '../../api/auth'

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

export const signOutAction = user => {
  return dispatch => {
    const signOut = async () => {
      await authApi.signOut(user)
      dispatch(userAuthActions.clearUser())
    }
    try {
      signOut(user)
    } catch (error) {
      console.error(error)
    }
  }
}

export const changePasswordAction = (passwords, user) => {
  return dispatch => {
    const changePass = async () => {
      await authApi.changePassword(passwords, user)
    }
    try {
      changePass()
    } catch (error) {
      console.error(error)
    }
  }
}
