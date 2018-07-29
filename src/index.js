import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import reducers from 'reducers'

import Root from 'containers/root/index'

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
))

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route component={Root} />
        </Router>
    </Provider>,
    document.getElementById('root')
)