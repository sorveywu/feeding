import { handleActions } from 'redux-actions';
import { ActionTypes } from '../actions/actionTypes';

const initialState = {
  location: null,
  weather: null,
  userInfo: null
}

const globalReducer = handleActions({
  [ActionTypes.SET_LOCATION]: (state, action) => {
    if (action.error || !action.payload) {
      return state;
    }
    return {
      ...state,
      location: {
        ...action.payload
      }
    }
  },
  [ActionTypes.SET_WEATHER]: (state, action) => {
    if (action.error || !action.payload) {
      return state;
    }
    return {
      ...state,
      weather: {
        ...action.payload
      }
    }
  },
  [ActionTypes.SET_USERINFO]: (state, action) => {
    return {
      ...state,
      userInfo: {
        ...action.payload
      }
    }
  }

}, initialState)

export default globalReducer;