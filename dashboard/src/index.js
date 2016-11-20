import React from 'react'
import thunk from 'redux-thunk'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import Dashboard from './components/Dashboard'
import reducer from './reducers'

const middleware = [ thunk ]

const store = createStore(reducer, applyMiddleware(...middleware));




render(
  <Provider store={store}>
    <Dashboard />
  </Provider>,
  document.getElementById('root')
);
