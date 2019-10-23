/*
 * @Author: houzhiqiag 
 * @Date: 2019-10-23 10:55:16 
 * @Last Modified by: houzhiqiag
 * @Last Modified time: 2019-10-23 11:31:48
 */
import Vue from 'vue'
import App from './App.vue'
import * as utils from './index'

window.utils = utils

new Vue({
  el: '#app',
  render: h => h(App)
})
