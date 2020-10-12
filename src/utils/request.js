import KbsApi from './KbsApi';
import { baseApiUrl } from '../configs/system.config';

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

    return this.KbsApi.exec(opt, checkError, showBusy, disabledErrTip);
  }
}


export default Request.getInstance()
