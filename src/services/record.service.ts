import Request from '../utils/request';

export const getDaily = () => Request.exec({
  type: "GET",
  url: '/record/today'
})

export const addRecord = params => Request.exec({
  type: 'POST',
  url: '/record/add',
  params
})

// 获取记录列表，可根据参数筛选
export const getAllRecord = params => Request.exec({
  type: 'POST',
  url: '/record/all',
  params
})
