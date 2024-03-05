import Vue from 'vue'
import App from './App'
import axios from 'axios'
import qs from 'qs'
import mpAdapter from 'axios-miniprogram-adapter'
import req from "@/utils/request";
Vue.prototype.$req = req;//设置原型，方便在全局中随时使用
axios.defaults.adapter = mpAdapter
// 设置反向代理，前端请求默认发送到 http://localhost:8443/api
// 全局注册，之后可在其他组件中通过 this.$axios 发送数据
Vue.prototype.$axios = axios;
Vue.prototype.$qs = qs;
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
Vue.prototype.globalData = getApp().globalData