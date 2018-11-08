// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Vux from 'vux'
import VueCorvova from 'vue-cordova'

// Vue.use(Vux)
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
//       store,
//       router,
//       components: { App },
//       template: '<App/>'
//   })
// }, false);