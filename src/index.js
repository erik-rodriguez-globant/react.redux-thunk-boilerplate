import React from 'react'
import ReactDOM from 'react-dom'
// import { ConnectedRouter } from "react-router-redux";
// history={createBrowserHistory()} forceRefresh={!supportsHistory}
import { BrowserRouter as Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import Store from './store'
import RootComponent from './containers'

const browserHistory = createBrowserHistory()
const initialState = {}
const store = Store()
const supportsHistory = 'pushState' in window.history

/* Here you can custom your own entry component */
const app = (
  <Router>
    <RootComponent store={store} />
  </Router>
)
ReactDOM.render(app, document.getElementById('app'))
