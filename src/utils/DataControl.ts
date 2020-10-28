import Taro from '@tarojs/taro';

let _instance: any;

class DataControl {
  private _values: {};
  private _store: any;
  private _layers: any;
  actions: any;
  constructor() {
    if (_instance) {
      throw new Error('单例模式，禁止new DataControl()');
    }
    this._values = {};
  }

  static getInstance() {
    _instance = _instance || new this();
    return _instance;
  }

  init(store, actions) {
    this._store = store;
    this.actions = actions;
  }

  getDispatch() {
    return this._store && this._store.dispatch;
  }

  getStoreData() {
    return this._store.getState() || {};
  }

  setLayers(data) {
    this._layers = {
      ...this._layers,
      ...data,
    };
  }

  getLayer(key) {
    if (!key) {
      return this._layers
    }
    return this._layers[key];
  }

  setValues(key, value) {
    this._values = {
      ...this._values,
      [key]: value,
    };
  }

  getValue(key) {
    return this._values[key];
  }

  // 去登录
  goLogin() {
    Taro.reLaunch({
      url: '/pages/login/index'
    })
  }

  // 跳转到首页
  goHomePage() {
    Taro.reLaunch({
      url: '/pages/index/index'
    })
  }
}

export default DataControl.getInstance();
