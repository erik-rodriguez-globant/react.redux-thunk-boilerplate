import { combineReducers } from 'redux'
import userWelcome from './reducers'
import Weather from './weather'

const rootReducer = combineReducers({ userWelcome, Weather })
export default rootReducer
