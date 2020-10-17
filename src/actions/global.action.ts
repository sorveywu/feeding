import Taro from '@tarojs/taro';
import { createAction } from 'redux-actions';
import { ActionTypes } from '../actions/actionTypes';
import * as globalApi from '../services/global.service';
import { saveAccessToken } from '../utils/tokenUtil';
import { weatherDataFormat } from '../utils/weatherDataFormat';

const setLocation = createAction(ActionTypes.SET_LOCATION);
const setWeather = createAction(ActionTypes.SET_WEATHER);
const setUserInfo = createAction(ActionTypes.SET_USERINFO);

// 用户登录
export const login = () => async dispatch => {
  const code = await globalApi.login();
  if (code) {
    const { success, userInfo } = await globalApi.getUserInfo();
    if (success) {
      const params = {
        ...userInfo,
        nickname: userInfo.nickName,
        code
      }
      const res = await globalApi.getToken(params);
      if (res && res.errorCode === 0) {
        const { accessToken, userInfo: userData } = res.data;
        // 更新用户信息
        dispatch(setUserInfo(userData));
        // 储存accessToken
        saveAccessToken(accessToken);
        return { success: true };
      }
      Taro.showToast({ title: res.message, icon: 'none' });
    }
  }
  Taro.showToast({ title: '获取用户信息失败', icon: 'none' });
  return { success: false };
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

// 获取当前城市code
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







