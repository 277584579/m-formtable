import fly from '../utils/fly'

// 获取token
export const randImg3 = (params:any={}):any => {
    return fly.request({
      url: '/cycms/hz/banner/index1.json',
      method: 'get',
      params: params
    })
}
// tset
export const test = (data:any={}):any => {
  return fly.request({
    url: '/control/base64UploadApi?operFlag=uploadPersonalPicture',
    data: data,
    method: 'POST',
  })
}