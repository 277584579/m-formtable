// https://github.com/wendux/fly
const fly:any=require("flyio")
import qs from 'qs'
let csrfToken="1234";
fly.config.baseURL=""
//添加请求拦截器
fly.interceptors.request.use(function (request:any):any {
  if(request.data) request.body = qs.stringify(request.data)
  request.headers["Content-Type"] ='application/x-www-form-urlencoded; charset=UTF-8'
  // request.headers["Content-Type"] ='application/json;charset=UTF-8'
  if (!csrfToken) {
    fly.lock(); //锁定当天实例，后续请求会在拦截器外排队
    return fly.get("/token").then((d: any):any => { //店务模块目前token接口没有 做了个假的填充
      request.headers["csrfToken"] = csrfToken = d.data.data.token;
      // log(`继续完成请求：path:${request.url}，baseURL:${request.baseURL}`)
      return request;
    }).finally(()=>{
      //fly.clear(); //clear the request queue
      fly.unlock();//解锁后，会继续发起请求队列中的任务
    }) 
  } else {
    request.headers["csrfToken"] = csrfToken;
    return request;
  }
})
fly.interceptors.response.use(
    (response:any) => {
        //只将请求结果的data字段返回
        return response.data
    },
    () => {
        //发生网络错误后会走到这里
        //return Promise.resolve("ssss")
    }
)
export default fly
