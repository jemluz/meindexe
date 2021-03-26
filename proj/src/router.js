import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Sobre from './views/About.vue'

import PageAuroraI from './views/PageAuroraI.vue'
import PageAuroraII from './views/PageAuroraII.vue'
import ProjMoniq from './views/ProjMoniq.vue'
import PageExchange from './views/PageExchange.vue'

import ProjBubbox from './views/ProjBubbox.vue'
import ProjProdutividade from './views/ProjProdutividade.vue'

import ProjGt from './views/ProjGt.vue'
import ProjLojista from './views/ProjLojista.vue'
import ProjLetRun from './views/ProjLetRun.vue'

import ProjOficinas from './views/ProjOficinas.vue'

import HomeFlutter from './views/mobile/HomeFlutter.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home-web',
      name: 'home-web',
      component: Home
    },
    {
      path: '/',
      name: 'home-flutter',
      component: HomeFlutter
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: Sobre
    },

    { path: '/aurora-i', name: 'aurora-i', component: PageAuroraI },
    { path: '/aurora-ii', name: 'aurora-ii', component: PageAuroraII },
    { path: '/exchange', name: 'exchange', component: PageExchange },
    { path: '/monique', name: 'monique', component: ProjMoniq },

    { path: '/bubbox', name: 'bubbox', component: ProjBubbox },
    { path: '/produtividade', name: 'produtividade', component: ProjProdutividade },
    
    { path: '/gt', name: 'gt', component: ProjGt },
    { path: '/lojista', name: 'lojista', component: ProjLojista },
    { path: '/letrun', name: 'letrun', component: ProjLetRun },

    { path: '/oficinas', name: 'oficinas', component: ProjOficinas }
  ]
})
