/* eslint-disable no-tabs */
import React, { useState, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header/Header'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'
import Board from './components/Board/Board'
import NewModal from './components/Modal/Modal'

const App = () => {
  const [user, setUser] = useState(null)
  const [msgAlerts, setMsgAlerts] = useState([])
  const [board, setBoard] = useState(null)
  const [modalShow, setModalShow] = useState(false)
  const [modalType, setModalType] = useState(null)
  const [elementID, setElementID] = useState(null)
  const [apiCall, setApiCall] = useState(null)

  const clearUser = () => setUser(null)
  const handleShow = () => setModalShow(true)
  const handleClose = () => setModalShow(false)
  const deleteAlert = id => setMsgAlerts(msgAlerts.filter(msg => msg.id !== id))

  const msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    return setMsgAlerts([...msgAlerts, { heading, message, variant, id }])
  }

  return (
    <Fragment>
      <Header user={user} />
      {msgAlerts.map(msgAlert => (
        <AutoDismissAlert
          key={msgAlert.id}
          heading={msgAlert.heading}
          variant={msgAlert.variant}
          message={msgAlert.message}
          id={msgAlert.id}
          deleteAlert={deleteAlert}
        />
      ))}
      <main className='container'>
        <Route
          path='/sign-up'
          render={() => (
            <SignUp msgAlert={msgAlert} setUser={setUser} />
          )}
        />
        <Route
          path='/sign-in'
          render={() => (
            <SignIn
              msgAlert={msgAlert}
              setUser={setUser}
              setBoard={setBoard}
            />
          )}
        />
        <AuthenticatedRoute
          user={user}
          path='/sign-out'
          render={() => (
            <SignOut
              msgAlert={msgAlert}
              clearUser={clearUser}
              setBoard={setBoard}
              user={user}
            />
          )}
        />
        <AuthenticatedRoute
          user={user}
          path='/change-password'
          render={() => <ChangePassword msgAlert={msgAlert} user={user} />}
        />
        <AuthenticatedRoute
          user={user}
          exact
          path='/'
          render={() => (
            <Board
              msgAlert={msgAlert}
              user={user}
              board={board}
              setModalType={setModalType}
              setElementID={setElementID}
              setApiCall={setApiCall}
              handleShow={handleShow}
            />
          )}
        />
      </main>
      <NewModal
        modalType={modalType}
        elementId={elementID}
        apiCall={apiCall}
        show={modalShow}
        handleClose={handleClose}
        user={user}
        setBoard={setBoard}
      />
    </Fragment>
  )
}

export default App
