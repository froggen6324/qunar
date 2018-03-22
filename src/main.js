
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'styles/base/reset.css'
import 'styles/base/border.css'
import 'swiper/dist/css/swiper.css'
import 'styles/base/iconfont/iconfont.css'

Vue.use(VueAwesomeSwiper)
FastClick.attach(document.body) 

Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
