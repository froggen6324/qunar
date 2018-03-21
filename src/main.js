
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import 'styles/base/reset.css'
import 'styles/base/border.css'
import 'styles/base/iconfont/iconfont.css'

FastClick.attach(document.body) 

Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
