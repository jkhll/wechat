import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/home'
// import Config from '@/components/config'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: () => import('@/components/home'),
      // component: () => import('@/components/room1'),
      children: [
        {
          path: ':room1',
          component: () => import('@/components/room1')
        }
      ]
    },
    {
      path: '/config',
      component: () => import('@/components/config')
    }
  ]
})
