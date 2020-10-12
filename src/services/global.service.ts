import Taro from '@tarojs/taro';
import Request from '../utils/request';
import amapConfig from '../configs/amap.config';

const { apiKey } = amapConfig;
const apiHost = 'https://restapi.amap.com/v3';

export const login = async () => {
  try {
    const res = await Taro.login()
    if (res && res.errMsg === 'login:ok') {
      return res.code;
    }
    return null;
  } catch (e) {
    return null;
  }
}

export const getUserInfo = async () => {
  try {
    const res = await Taro.getUserInfo();
    console.log(res)
  } catch (e) {
    console.log(123)
    return null;
  }
}

// 获取经纬度
export const getLocation = async () => {
  try {
    const ret = await Taro.getLocation({ type: 'wgs84' });
    const { latitude, longitude } = ret;
    if (latitude && longitude) {
      return ret;
    }
    return null;
  } catch (e) {
    return null;
  }
}

export const getCityCode = (lat, lng) => Request.exec({
  type: 'GET',
  url: `${apiHost}/geocode/regeo?location=${lng},${lat}&key=${apiKey}`
})

export const getWeather = cityCode => Request.exec({
  type: 'GET',
  url: `${apiHost}/weather/weatherInfo?city=${cityCode}&key=${apiKey}`
})