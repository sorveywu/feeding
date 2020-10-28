import { handleActions } from 'redux-actions';
import { ActionTypes } from '../actions/actionTypes';

const initialState = {
  daily: null,
  today: [],  // 今天的记录列表
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
  }
}, initialState)

export default recordReducer;