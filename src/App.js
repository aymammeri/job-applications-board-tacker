/* eslint-disable no-tabs */
import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

import { useSelector } from 'react-redux'

import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute'
import Header from './components/Header/Header'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'
import Board from './components/Board/Board'
import NewModal from './components/Modal/Modal'

const App = () => {
  const user = useSelector(state => state.auth.user)

  return (
    <Fragment>
      <Header user={user} />
      <main className='container'>
        <Route path='/sign-up' render={() => <SignUp />} />
        <Route path='/sign-in' render={() => <SignIn />} />
        <AuthenticatedRoute
          path='/sign-out'
          user={user}
          render={() => <SignOut />}
        />
        <AuthenticatedRoute
          path='/change-password'
          user={user}
          render={() => <ChangePassword />}
        />
        <AuthenticatedRoute
          exact
          path='/'
          user={user}
          render={() => <Board />}
        />
      </main>
      <NewModal user={user} />
    </Fragment>
  )
}

export default App
