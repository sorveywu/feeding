import { combineReducers } from 'redux'
import counter from './counter'
import globalReducer from './global.reducer';
import recordReducer from './record.reducer';

export default combineReducers({
  global: globalReducer,
  record: recordReducer,
  counter
})
