import Taro from '@tarojs/taro';
import { createAction } from 'redux-actions';
import { ActionTypes } from '../actions/actionTypes';
import * as babyApi from '../services/baby.service';

export const addBaby = params => async dispatch => {
  await babyApi.addBaby(params);
}

export const getBabyList = () => async dispatch => {
  const res = await babyApi.getBabyList();
  console.log(res)
}