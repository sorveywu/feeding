import Taro from '@tarojs/taro';

export enum Gender {
  Unknown = 0, // 未知
  Male = 1, // 男
  Female = 2, // 女
}

export enum MedicineType {
  NONE = 0,
  AD = 1,
  D3 = 2,
}

const { safeArea } = Taro.getSystemInfoSync();
export const SafeAreaHeight = safeArea.bottom - safeArea.height;
