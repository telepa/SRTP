import Vue from 'vue'
import App from './index'
import global from '../../components/global'
const app = new Vue(App)
app.$mount()
Vue.prototype.GLOBAL=global
