import Request from '../utils/request';

export const addBaby = params => {
  Request.exec({
    type: 'POST',
    url: `/baby/add`,
    params
  })
}