// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './iconfont/iconfont.css'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'

Vue.use(ElementUI)
Vue.use(VueLazyload, {
  loading: require('./assets/logo.png')
})
fastclick.attach(document.body)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
