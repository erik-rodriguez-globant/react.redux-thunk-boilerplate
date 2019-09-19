import {
  FETCH_CURRENT_WEATHER,
  UPDATE_CURRENT_WEATHER,
  WELCOME_MESSAGE,
} from '../constants'

export const fetchCurrentWeather = cityId => {
  return {
    type: FETCH_CURRENT_WEATHER,
    cityId,
  }
}

export const updateCurrentWeather = info => {
  return {
    type: UPDATE_CURRENT_WEATHER,
    info,
  }
}

const welcomeMessage = () => {
  return {
    type: WELCOME_MESSAGE,
  }
}

export const loadMessage = dispatch => {
  return dispatch && dispatch(welcomeMessage())
}
