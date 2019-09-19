import { FETCH_CURRENT_WEATHER, UPDATE_CURRENT_WEATHER } from '../constants'

const initalState = {}
export default function Weather(state = initalState, action) {
  switch (action.type) {
    case FETCH_CURRENT_WEATHER:
      return state

    case UPDATE_CURRENT_WEATHER:
      return state

    default:
      return true
  }
}
