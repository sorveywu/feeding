import { handleActions } from 'redux-actions';
import { ActionTypes } from '../actions/actionTypes';

const initialState = {
  daily: null,
  today: [],  // 今天的记录列表
  latest: []
}

const recordReducer = handleActions({
  [ActionTypes.SET_DAILY]: (state, action) => {
    if (action.error || !action.payload) {
      return state;
    }
    return {
      ...state,
      daily: {
        ...action.payload
      }
    }
  },
  [ActionTypes.SET_LATEST]: (state, action) => {
    if (action.error || !action.payload) {
      return state;
    }
    return {
      ...state,
      latest: action.payload
    }
  }
}, initialState)

export default recordReducer;