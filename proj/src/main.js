import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import VueAgile from 'vue-agile'
Vue.use(VueAgile)

import AOS from 'aos'
import 'aos/dist/aos.css'

import Toasted from 'vue-toasted'
Vue.use(Toasted)

import vueHeadful from 'vue-headful';
Vue.component('vue-headful', vueHeadful);

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
  faArrowLeft,
  faPlus,
  faMinus
} from '@fortawesome/free-solid-svg-icons'

Vue.component('fa-icon', FontAwesomeIcon)
library.add(
  faArrowLeft, 
  faPlus,
  faMinus
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
