import React from 'react'
import { Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import Home from './Home'

const RootComponent = ({ store }) => (
  <Provider store={store}>
    <Route path="/" component={Home} />
  </Provider>
)

export default RootComponent
