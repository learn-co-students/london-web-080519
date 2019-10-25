import React from 'react'
import ReactDOM from 'react-dom'

// REDUX
import { Provider } from 'react-redux'
import store from './store'

import './index.css'
import App from './App'

// WRAP APP IN PROVIDER
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
