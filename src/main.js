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
