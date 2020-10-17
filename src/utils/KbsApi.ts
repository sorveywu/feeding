import DataControl from './DataControl';
import fetchWithErrorCode from "./fetchWithErrorCode";
import { getToken } from './tokenUtil';

// 生成URL参数
const generateQueryString = (paramsName, params) => {
  const trim = (str) => `${str}`.replace(/(^\s*)|(\s*$)/g, '')
  let queryStr = ''
  for (let i = 0; i < paramsName.length; i++) {
    const value = params[paramsName[i]]
    if (typeof value === 'undefined' || trim(value) === '') {
      continue
    } else if (value instanceof Array) {
      for (let j = 0; j < value.length; j++) {
        queryStr = `${queryStr + paramsName[i]}=${value[j]}&`
      }
    } else {
      queryStr = `${queryStr + paramsName[i]}=${value}&`
    }
  }
  queryStr = queryStr.substr(0, queryStr.length - 1)
  return queryStr
}

// 生成加密后的header
const generateHeader = async (type, options, params = {}) => {
  const optHeaders = options.headers || {}

  let paramsName = Object.keys(params);
  let queryStr = '';
  paramsName = paramsName.sort();
  if (type !== 'POST') {
    queryStr = generateQueryString(paramsName, params)
  }

  const headers = {
    ...optHeaders,
    Accept: '*/*',
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache'
  }

  return { headers, queryStr }
}

// 检测有没有token
const checkToken = () => {
  const accessToken = getToken();
  if (accessToken) {
    return accessToken;
  }
  return false;
}

export default class KbsApi {
  baseUrl: any;
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async exec(opt, checkError, showBusy, disableErrTip) {
    const { url: method, type, params, withToken = true } = opt;
    const hasHttp = method.startsWith('http');
    const url = hasHttp ? method : this.baseUrl + method;
    const { headers, queryStr } = await generateHeader(type, opt, params);

    // 是否需要token, 默认true
    let accessToken = checkToken();
    // 需要登录&&没有token&&不是https开头的请求
    if (withToken && !accessToken && !hasHttp) {
      DataControl.goLogin();
      return;
    }
    const tokenParam = withToken ? { Authorization: accessToken } : {}

    const res = await fetchWithErrorCode(
      queryStr ? `${url}?${queryStr}` : url,
      {
        method: type,
        headers: {
          ...headers,
          ...tokenParam,
          ...opt.headers
        },
        body: type === 'POST' ? JSON.stringify(opt.params) : null
      },
      opt.timeout || 10000,
      checkError,
      !disableErrTip,
      showBusy,
      opt.errorHandler
    )

    return res;
  }
}