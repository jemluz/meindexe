import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import ProjTemplate from './components/template/ProjTemplate'
Vue.component('proj-template', ProjTemplate)

import VueAgile from 'vue-agile'
Vue.use(VueAgile)

import AOS from 'aos'
import 'aos/dist/aos.css'

import Toasted from 'vue-toasted'
Vue.use(Toasted)

import vueHeadful from 'vue-headful';
Vue.component('vue-headful', vueHeadful);

import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
  faArrowLeft,
  faArrowRight, 
  faPlus,
  faMinus,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons'

import { 
  faWhatsapp,
  faInstagram,
  faGithub
} from '@fortawesome/free-brands-svg-icons'

Vue.component('fa-icon', FontAwesomeIcon)
library.add(
  faArrowLeft, 
  faArrowRight, 
  faPlus,
  faMinus,
  faWhatsapp,
  faInstagram,
  faEnvelope,
  faGithub
)

Vue.config.productionTip = false

new Vue({
  created() {
    AOS.init()
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
