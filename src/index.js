import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from 'reducers'

import Root from 'containers/root/index'

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
))

ReactDOM.render(
    <Root store={store} />,
    document.getElementById('root')
)