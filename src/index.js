import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import appReducer from './redux/appReducer'
import App from './App'


const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const EnchantedApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(<EnchantedApp />, document.getElementById('root'))
