// import _fetch from "./fetch";
import Taro from "@tarojs/taro";

const _fetch = (url, opt, timeout) => {
  const { method, headers: header, body: data } = opt;
  return Taro.request({
    url,
    data,
    header,
    method,
    timeout,
    dataType: "text",
    responseType: "text",
  });
};

const fetchWithErrorCode = async (
  url: any,
  opt: object = {},
  timeout = 5000,
  checkError: (arg0: any) => any,
  showError: any,
  showBusy = true,
  errorHandler: (arg0: any) => any
) => {
  let err: any = null,
    json: any = null;

  if (showBusy) {
    const title = process.env.TARO_ENV === "tt" ? "加载中" : "";
    Taro.showLoading({ title, mask: true });
  }

  try {
    const response = await _fetch(url, opt, timeout);
    if (response.statusCode >= 200 && response.statusCode < 300) {
      try {
        json = JSON.parse(response.data);
        // 使用传入的checkError方法处理服务端返回的错误
        const error = checkError ? checkError(json) : null;
        if (error) {
          // 如果有错误，直接抛出
          err = error;
        }
      } catch (error) {
        err = {
          code: -103,
          desc: "数据加载错误",
          data: "JSON解析失败",
        };
      }
    } else {
      err = {
        code: response.statusCode,
        desc: "接口返回错误",
        data: response.data,
      };
    }
  } catch (error) {
    if (error === "timeout") {
      err = {
        code: -102,
        desc: "网络异常",
        data: "超时",
      };
    } else {
      err = {
        code: -101,
        desc: "网络异常",
        data: error.message,
      };
    }
  }

  if (showBusy) {
    Taro.hideLoading();
  }

  if (err && (!errorHandler || !errorHandler(err))) {
    err.data = err.data || "";
    const errorMsg = `${err.desc}(${err.code} ${err.data})`;
    if (showError) {
      setTimeout(() => {
        Taro.showToast({
          title: errorMsg,
          icon: "none",
          duration: 1239,
        });
      }, 1000);
    }
    throw err;
  } else {
    return json || err;
  }
};

export default fetchWithErrorCode;
