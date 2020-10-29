import Taro from '@tarojs/taro';

export enum Gender {
  Unknown = 0, // 未知
  Male = 1, // 男
  Female = 2, // 女
}

const { safeArea } = Taro.getSystemInfoSync();
export const SafeAreaHeight = safeArea.bottom - safeArea.height;
