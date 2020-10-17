import Taro from "@tarojs/taro";
import KbsApi from './KbsApi';
import { baseApiUrl } from '../configs/system.config';
import DataControl from './DataControl';
import { removeToken } from './tokenUtil';

const checkError = () => null;

class Request {
  static instance = null;

  static getInstance() {
    if (!(this.instance instanceof this)) {
      this.instance = new this();
    }
    return this.instance;
  }

  /**
   * @param opt 接口参数
   * @param showBusy loading样式
   * @param disabledErrTip 是否提示错误信息 toast msg 默认0
   * @returns {Promise<*>}
   */
  async exec(opt, showBusy, disabledErrTip) {
    if (!this.KbsApi) {
      this.KbsApi = new KbsApi(baseApiUrl);
    }

    // 非20x错误的特殊处理
    opt.errorHandler = res => {
      const {code} = res;
      // 登录失效
      if(code === 401) {
        setTimeout(() => {
          Taro.showToast({
            title: '登录失效，请重新登录',
            icon: "none",
            duration: 1239,
          });
        }, 1000)
        removeToken();
        DataControl.goLogin();
        return true;
      }
      return false
    };

    return this.KbsApi.exec(opt, checkError, showBusy, disabledErrTip);
  }
}


export default Request.getInstance()
