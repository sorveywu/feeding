import fetchWithErrorCode from "./fetchWithErrorCode";

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
const generateHeader = async (type, method, options, params = {}) => {
  // console.log("generateHeader", type, method, params)
  const optHeaders = options.headers || {}

  // 加密
  let paramsName = Object.keys(params)
  paramsName = paramsName.sort()

  let queryStr = ''

  if (type === 'POST') {

  } else {
    queryStr = generateQueryString(paramsName, params)
  }
  // console.log('signStr', `${signStr}|`);
  const headers = {
    ...optHeaders,
    Accept: '*/*',
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache'
  }

  return { headers, queryStr }
}


export default class KbsApi {
  baseUrl: any;
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async exec(opt, checkError, showBusy, disableErrTip) {
    const { url: method, type, params } = opt;
    const url = method.startsWith('http') ? method : this.baseUrl + method;
    const { headers, queryStr } = await generateHeader(type, method, opt, params);

    const res = await fetchWithErrorCode(
      queryStr ? `${url}?${queryStr}` : url,
      {
        method: type,
        headers: {
          ...headers,
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