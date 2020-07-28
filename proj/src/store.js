import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import en from './en.json'
import pt from './pt.json'

export default new Vuex.Store({
  state: { 
    PT: pt,
    EN: en,
    lang: null
  },
  mutations: {
    setLangPT (state) {
      state.lang = pt
    },
    setLangEN (state) {
      state.lang = en
    }
  }
}) 