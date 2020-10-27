import Request from '../utils/request';

export const addRecord = params => {
  Request.exec({
    type: 'POST',
    url: `/record/add`,
    params
  })
}