declare module "*.png";
declare module "*.gif";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.css";
declare module "*.less";
declare module "*.scss";
declare module "*.sass";
declare module "*.styl";

// @ts-ignore
declare const process: {
  env: {
    TARO_ENV: 'weapp' | 'swan' | 'alipay' | 'h5' | 'rn' | 'tt' | 'quickapp' | 'qq' | 'jd';
    [key: string]: any;
  }
}

declare namespace JSX {
  interface IntrinsicElements {
    'van-dropdown-menu': any;
    'van-calendar': any;
    'van-button': any;
    'van-count-down': any;
    'van-icon': any;
    'van-image': any;
    'van-nav-bar': any;
    'van-cell': any;
    'van-cell-group': any;
    'van-radio': any;
    'van-radio-group': any;
    'van-field': any;
    'van-dialog': any;
    'van-switch': any;
    'van-notify': any;
    'van-datetime-picker': any;
    'van-popup': any;
  }
}
