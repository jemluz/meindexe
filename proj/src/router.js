import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import ProjExchange from './views/ProjExchange.vue'
import ProjAuroraI from './views/ProjAuroraI.vue'
import ProjAuroraII from './views/ProjAuroraII.vue'
import ProjMoniq from './views/ProjMoniq.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/exchange',
      name: 'exchange',
      component: ProjExchange
    },
    {
      path: '/aurora-i',
      name: 'aurora-i',
      component: ProjAuroraI
    },
    {
      path: '/aurora-ii',
      name: 'aurora-ii',
      component: ProjAuroraII
    },
    {
      path: '/moniq',
      name: 'moniq',
      component: ProjMoniq
    }
  ]
})
