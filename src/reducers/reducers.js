import { WELCOME_MESSAGE } from '../constants'

const initialState = {
  welcomeMessage: '',
}

export default function userWelcome(state = initialState, action) {
  switch (action.type) {
    case WELCOME_MESSAGE:
      return {
        ...state,
        welcomeMessage: 'Welcome onboard',
      }

    default:
      return true
  }
}
