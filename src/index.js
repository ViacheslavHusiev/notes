import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import { compose, createStore } from 'redux'
import rootReducer from './redux/rootReducer'

// convert object to string and store in localStorage
function saveToLocalStorage (state) {
  try {
    const serialisedState = JSON.stringify(state)
    localStorage.setItem('persistantState', serialisedState)
  } catch (e) {
    console.warn(e)
  }
}

// load string from localStarage and convert back in to an Object
// invalid output must be undefined
function loadFromLocalStorage () {
  try {
    const serialisedState = localStorage.getItem('persistantState')
    if (serialisedState === null) return undefined
    return JSON.parse(serialisedState)
  } catch (e) {
    console.warn(e)
    return undefined
  }
}

const store = createStore(rootReducer, loadFromLocalStorage(), compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

store.subscribe(() => saveToLocalStorage(store.getState()))

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
