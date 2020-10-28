import Taro from '@tarojs/taro';
import { createAction } from 'redux-actions';
import dayjs from 'dayjs';
import { RecordType, FilterType } from '../constants/entity.constant';
import { ActionTypes } from '../actions/actionTypes';
import * as recordApi from '../services/record.service';

const setDaily = createAction(ActionTypes.SET_DAILY);

// 获取每天日常记录的数据
export const getDaily = () => async dispatch => {
  const res = await recordApi.getDaily();
  if (res && res.errorCode === 0) {
    dispatch(setDaily(res.data.daily));
  }
}

// 添加记录
export const addDailyRecord = params => async () => {
  const res = await recordApi.addRecord(params);
  if (res && res.errorCode === 0) {
    Taro.showToast({ title: res.message, icon: 'none' });
  }
}

// 获取当天的记录
export const getRecordOfToday = () => async dispatch => {
  const day = dayjs().format();
  const params = {
    type: RecordType.Unknown,
    filterType: FilterType.Day,
    day
  }
  const res = await recordApi.getAllRecord(params);
}