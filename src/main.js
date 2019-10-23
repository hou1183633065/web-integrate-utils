/*
 * @Author: houzhiqiag 
 * @Date: 2019-10-23 10:55:16 
 * @Last Modified by:   houzhiqiag 
 * @Last Modified time: 2019-10-23 10:55:16 
 */
import Vue from 'vue'
import App from './App.vue'
import {
  email,
  phone,
  string,
  array,
  number,
  date,
  verify,
  url,
} from './index'

window.utils = {
  email,
  phone,
  string,
  array,
  number,
  date,
  verify,
  url,
}

new Vue({
  el: '#app',
  render: h => h(App)
})
