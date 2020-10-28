import { handleActions } from 'redux-actions';
import { ActionTypes } from '../actions/actionTypes';

const initialState = {
  location: null, // 位置信息
  weather: null,  // 今日天气
  userInfo: null, // 当前用户的信息
  currentBabyId: null,  // 当前baby的id
  currentBaby: null, // 当前使用的baby
  babyList: []  // 关联的baby列表
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
    if (action.error || !action.payload) {
      return state;
    }
    const { children = [], currentBaby: currentBabyId } = action.payload;
    const currentBaby = children.find(i => i.id === currentBabyId) || null;

    return {
      ...state,
      userInfo: {
        ...action.payload
      },
      currentBaby,
      currentBabyId
    }
  }

}, initialState)

export default globalReducer;