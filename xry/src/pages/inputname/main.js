import Vue from 'vue'
import App from './index'
import global from '../../components/global'
Vue.prototype.GLOBAL=global
const app = new Vue(App)
app.$mount()

