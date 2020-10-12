import { combineReducers } from 'redux'
import counter from './counter'
import globalReducer from './global.reducer';

export default combineReducers({
  global: globalReducer,
  counter
})
