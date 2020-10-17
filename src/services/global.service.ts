import Taro from '@tarojs/taro';
import Request from '../utils/request';
import amapConfig from '../configs/amap.config';

const { apiKey } = amapConfig;
const amapApiHost = 'https://restapi.amap.com/v3';

// 微信登录获取code
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

type props = {
  success: boolean,
  userInfo?: any
}
// 获取用户信息
export const getUserInfo = async (): Promise<props> => {
  try {
    const res = await Taro.getUserInfo();
    if (res && res.errMsg === 'getUserInfo:ok') {
      return {
        success: true,
        userInfo: {
          ...res.userInfo,
          rawData: res.rawData
        }
      }
    } else {
      return {
        success: false
      }
    }
  } catch (e) {
    return {
      success: false
    };
  }
}

// 从服务获取token
export const getToken = params => Request.exec({
  type: 'POST',
  url: `/wxAuth/login`,
  withToken: false,
  params
})

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

// 获取高德城市编码
export const getCityCode = (lat: number, lng: number) => Request.exec({
  type: 'GET',
  url: `${amapApiHost}/geocode/regeo?location=${lng},${lat}&key=${apiKey}`
})

// 获取高德天气
export const getWeather = (cityCode: number) => Request.exec({
  type: 'GET',
  url: `${amapApiHost}/weather/weatherInfo?city=${cityCode}&key=${apiKey}`
})