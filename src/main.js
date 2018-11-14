// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible.js'//适配移动端dpr
import VueCorvova from 'vue-cordova'

Vue.use(VueCorvova)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// document.addEventListener('deviceready', function() {
//   new Vue({
//       el: '#app',
//       router,
//       components: { App },
//       template: '<App/>'
//   })
// }, false);