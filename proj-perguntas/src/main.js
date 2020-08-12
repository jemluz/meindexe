import Vue from 'vue'
import App from './App.vue'
import router from './config/router'
import store from './config/store'

import './config/msgs'
import './config/axios'

import Header from './components/Header'
Vue.component('nav-bar', Header)

import TitleSub from './components/TitleSub'
Vue.component('title-sub', TitleSub)

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
  faArrowLeft,
  faArrowRight, 
  faPlus,
  faMinus,
  faListOl,
  faGrinTongue,
  faSadCry,
  faSurprise,
  faCheck,
  faTrashAlt,
  faEdit,
  faRedoAlt
} from '@fortawesome/free-solid-svg-icons'

Vue.component('fa-icon', FontAwesomeIcon)
library.add(
  faArrowLeft, 
  faArrowRight, 
  faListOl,
  faGrinTongue,
  faSadCry,
  faSurprise,
  faPlus,
  faMinus,
  faCheck,
  faTrashAlt,
  faEdit,
  faRedoAlt
  // faInstagram,
  // faGithub
)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
