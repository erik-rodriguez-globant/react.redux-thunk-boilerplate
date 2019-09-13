import { FETCH_USER, UPDATE_USER, WELCOME_MESSAGE } from '../constants';

const initialState = {
  welcomeMessage: ''
}

export default function userWelcome(state = initialState, action) {
  switch(action.type){
    case FETCH_USER:
     return true
    
    case UPDATE_USER:
      return true

    case WELCOME_MESSAGE:
      return {
        ...state,
        welcomeMessage: 'Welcome onboard'
      }

    default:
      return true
  }
}