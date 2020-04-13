import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Bus from './lib/bus'
import iview from 'iview'
import 'iview/dist/styles/iview.css'
// import '@/assets/font/iconfont.js'
// import '@/assets/font/iconfont.css'
// import IconFont from '_c/icon-font'
// import IconSvg from '_c/icon-svg'
if (process.env.NODE_ENV !== 'production') require('./mock')

Vue.config.productionTip = false
Vue.prototype.$bus = Bus
// Vue.component('icon-font', IconFont)
// Vue.component('icon-svg', IconSvg)
Vue.use(iview)



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
