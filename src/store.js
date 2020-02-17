import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMenuVisible: true,
    isCloseIcon: false
  },
  mutations: {
    toggleMenu (state, isVisible) {
      // se isVisible ainda não foi definida
      if(isVisible === undefined) {
        state.isMenuVisible = !state.isMenuVisible
        state.isCloseIcon = !state.isCloseIcon
        // modifica os estados alternadamente
      } else {
        // se já tem um valor atribuido
        state.isMenuVisible = isVisible
        state.isCloseIcon = isVisible
        // alterne para o valor oposto
      }
      console.log('toggleMenu = ' + state.isMenuVisible + ' PositionFixed = ' + state.isCloseIcon)
    }
  }
}) 