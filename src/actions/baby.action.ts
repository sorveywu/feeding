import Taro from '@tarojs/taro';
import { createAction } from 'redux-actions';
import { ActionTypes } from '../actions/actionTypes';
import * as babyApi from '../services/baby.service';

export const addBaby = params => async dispatch => {
  const res = await babyApi.addBaby(params);
  console.log(res)
}

export const getBabyList = () => async dispatch => {
  const res = await babyApi.getBabyList();
}