import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Sobre from './views/About.vue'

import ProjTemplate from './components/template/ProjTemplate.vue'

import PageAuroraI from './views/PageAuroraI.vue'
import PageAuroraII from './views/PageAuroraII.vue'


import ProjExchange from './views/ProjExchange.vue'
import ProjAuroraII from './views/ProjAuroraII.vue'
import ProjMoniq from './views/ProjMoniq.vue'
import ProjBubbox from './views/ProjBubbox.vue'
import ProjGt from './views/ProjGt.vue'
import ProjProdutividade from './views/ProjProdutividade.vue'

// import ProjAuroraI from './views/ProjAuroraI.vue'

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
      path: '/sobre',
      name: 'sobre',
      component: Sobre
    },
    { path: '/aurora-i', name: 'aurora-i', component: PageAuroraI },
    { path: '/aurora-ii', name: 'aurora-ii', component: PageAuroraII },

    { path: '/exchange', name: 'exchange', component: ProjExchange },
    { path: '/monique', name: 'monique', component: ProjMoniq },
    { path: '/bubbox', name: 'bubbox', component: ProjBubbox },
    { path: '/gt', name: 'gt', component: ProjGt },
    { path: '/produtividade', name: 'produtividade', component: ProjProdutividade }
  ]
})
