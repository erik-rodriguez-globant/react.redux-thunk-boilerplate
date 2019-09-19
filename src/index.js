import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import Store from './store'
import RootComponent from './containers'

const store = Store()

/* Here you can custom your own entry component */
const app = (
  <Router>
    <RootComponent store={store} />
  </Router>
)
ReactDOM.render(app, document.getElementById('app'))
