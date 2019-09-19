import { WELCOME_MESSAGE } from '../constants'

/* eslint-disable no-unused-vars */
export default store => next => action => {
  if (typeof action === 'undefined') {
    return next(action)
  }

  switch (action.type) {
    case WELCOME_MESSAGE:
      return next(action)

    default:
      return true
  }
}
