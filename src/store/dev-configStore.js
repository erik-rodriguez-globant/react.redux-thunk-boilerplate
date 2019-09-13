import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import thunkActions from '../thunks'

const initalState = {};
/* In dev store we have a redux-logger */
const devStore = () => {
  const store = createStore(
    rootReducer,
    initalState,
    compose(applyMiddleware(thunk, thunkActions, createLogger()))
  )

  return store
}

export default devStore
