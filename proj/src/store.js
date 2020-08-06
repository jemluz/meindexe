import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import en from './en.json'
import pt from './pt.json'

export default new Vuex.Store({
  state: { 
    lang: pt,
    isPtLanguage: pt
  },
  mutations: {
    setLangPT (state) {
      state.lang = pt
      state.isPtLanguage = true
    },
    setLangEN (state) {
      state.lang = en
      state.isPtLanguage = false
    }
  }
}) 