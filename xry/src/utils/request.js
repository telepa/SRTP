import axios from 'axios'
import qs from 'qs'
//设置根路径，可以在后期需要发送请求时使用 简写url  
const baseUrl =  'http://10.193.201.230:8442/api';//这里为服务器地址，或者叫接口地址
axios.defaults.baseURL = baseUrl;

//解决微信小程序直接使用 axios 会报错的问题
axios.defaults.adapter = function (config) {
  return new Promise((resolve, reject) => {
    let data = config.method === 'get' ? config.params : qs.stringify(config.data)
    // wx小程序 发起相应请求
    wx.request({
      url: baseUrl + config.url,
      method:config.method,
      data:data,
      success:(res)=>{ return resolve(res)},
      fail:(err)=>{return reject(err)}
    })
  })
}
//真机获取 解决app上adapter is not a function问题
axios.defaults.adapter = function(config) {
  return new Promise((resolve, reject) => {
     var settle = require('axios/lib/core/settle');
     var buildURL = require('axios/lib/helpers/buildURL');
     var buildFullPath = require('axios/lib/core/buildFullPath');
     let fullurl = buildFullPath(config.baseURL,config.url)
     uni.request({
       method: config.method.toUpperCase(),
       url: buildURL(fullurl, config.params, config.paramsSerializer),
       header: config.headers,
       data: config.data,
       dataType: config.dataType,
       responseType: config.responseType,
       sslVerify: config.sslVerify,
       complete:function complete(response){
         response = {
           data: response.data,
           status: response.statusCode,
           errMsg: response.errMsg,
           header: response.header,
           config: config
         };
         
       settle(resolve, reject, response);
       }
     })
     })
}
//封装 axios 请求函数
function call(url,params={},method='GET'){
  return axios({
    method,
    url,
    params
  })
}

export default {
    call: call
}
