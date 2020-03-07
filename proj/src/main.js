import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Toasted from 'vue-toasted'

Vue.config.productionTip = false
Vue.use(Toasted)

new Vue({
  created() {
    AOS.init()
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
