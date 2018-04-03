import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import user from '@/pages/user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/user',
      name: 'user',
      component: user
    }
  ]
})
