import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/login'
import Home from '@/view/home'
import Real from '@/view/real'
import Count from '@/view/count'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/home/real',
          name: 'real',
          component: Real
        },
        {
          path: '/home/count',
          name: 'count',
          component: Count
        },
      ]
    }
  ]
})
