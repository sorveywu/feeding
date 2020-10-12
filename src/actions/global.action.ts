import Taro from '@tarojs/taro';
import { createAction } from 'redux-actions';
import { ActionTypes } from '../actions/actionTypes';
import * as globalApi from '../services/global.service';

import { weatherDataFormat } from '../utils/weatherDataFormat';

const setLocation = createAction(ActionTypes.SET_LOCATION);
const setWeather = createAction(ActionTypes.SET_WEATHER);

export const login = () => async () => {
  // const res = await globalApi.login();
  const res = await globalApi.getUserInfo();
}

// 获取当前经纬度
export const getLatLng = () => async () => {
  const res = await globalApi.getLocation();
  if (res && res.errMsg === 'getLocation:ok') {
    const { latitude, longitude } = res;
    return {
      latitude,
      longitude
    }
  }
  Taro.showToast({ title: '获取定位失败', icon: 'none' });
  return null;
}

export const getCityCode = (lat, lng) => async () => {
  const res = await globalApi.getCityCode(lat, lng);
  if (res && +res.status === 1) {
    const { regeocode: { addressComponent, formatted_address } } = res;
    const { city, province, adcode, district, towncode, streetNumber, country, township } = addressComponent;
    return {
      city,
      province,
      cityCode: adcode,
      district,
      towncode,
      streetNumber,
      country,
      township,
      formatted_address
    }
  }
  Taro.showToast({ title: '获取城市信息失败', icon: 'none' });
  return null;

};

export const getWeather = () => async dispatch => {
  const res = await getLatLng()();
  if (!res) return { success: false };

  const { latitude, longitude } = res;
  const cityInfo = await getCityCode(latitude, longitude)()
  if (!cityInfo) return { success: false };
  dispatch(setLocation({
    ...cityInfo
  }))

  const { cityCode } = cityInfo;
  const weatherRes = await globalApi.getWeather(cityCode);
  if (weatherRes && +weatherRes.status === 1) {
    const { lives } = weatherRes;
    const wetherData = weatherDataFormat(lives[0])
    dispatch(setWeather({
      ...wetherData
    }))
    return { success: true }
  }
  Taro.showToast({ title: '获取天气信息失败', icon: 'none' });
  return { success: false }
}







