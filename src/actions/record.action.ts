import Taro from '@tarojs/taro';
import { createAction } from 'redux-actions';
import { ActionTypes } from '../actions/actionTypes';
import * as recordApi from '../services/record.service';

export const addRecord = params => async dispatch => {
  await recordApi.addRecord(params);
}
