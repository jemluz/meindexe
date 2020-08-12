import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import QPage from '../views/QuestionarioPage'
import QCreate from '../views/QuestionarioCadastro'
import QEdit from '../views/QuestionarioEditar'

Vue.use(VueRouter)
  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  { 
    path: '/questionario/:id', 
    name: 'questionario-page', 
    component: QPage, 
    props: true 
  },
  { 
    path: '/criar-questionario', 
    name: 'q-create', 
    component: QCreate,
  },
  { 
    path: '/editar-questionario/:id', 
    name: 'q-edit', 
    component: QEdit,
    props: true 
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
