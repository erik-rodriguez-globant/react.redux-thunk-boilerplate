import { FETCH_CURRENT_WEATHER, UPDATE_CURRENT_WEATHER } from '../constants';

export default function Weather(initalState = {}, action){
  switch(action.type){
    case FETCH_CURRENT_WEATHER:
    return true

    case UPDATE_CURRENT_WEATHER:
      return true

    default:
      return true
  }
}