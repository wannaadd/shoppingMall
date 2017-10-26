// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ELementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import api from './js/api.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false

Vue.use(ELementUI)
Vue.use(VueAwesomeSwiper)

Vue.prototype.api = api

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
