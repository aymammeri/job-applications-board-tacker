import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './index.scss'

import App from './App'
import { BrowserRouter } from 'react-router-dom'
import store from './Store/rootStore'

const appJsx = (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)

ReactDOM.render(appJsx, document.getElementById('root'))
