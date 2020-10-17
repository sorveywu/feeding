import Taro from '@tarojs/taro';
/**
 * 存储tokens
 * @param {string} accessToken
 * @param {string} refreshToken
 */
export function saveTokens(accessToken: string, refreshToken: string): void {
  Taro.setStorageSync('access_token', `Bearer ${accessToken}`)
  Taro.setStorageSync('refresh_token', `Bearer ${refreshToken}`)
}
/**
* 存储access_token
* @param {string} accessToken
*/
export function saveAccessToken(accessToken: string): void {
  Taro.setStorageSync('access_token', `Bearer ${accessToken}`);
}
/**
* 获得某个token
* @param {string} tokenKey
*/
export function getToken(tokenKey: string = 'access_token'): string {
  return Taro.getStorageSync(tokenKey);
}
/**
* 移除token
*/
export function removeToken(): void {
  Taro.removeStorageSync('access_token');
  Taro.removeStorageSync('refresh_token');
}
/**
* 获取是否需要更新个人信息
*/
export function needUpdate(): string {
  return getToken('needUpdate');
}