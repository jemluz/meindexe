import Vue from 'vue'
import Toasted from 'vue-toasted'

Vue.use(Toasted, {
  duration: 3000,
  iconPack: 'fontawesome',
  position: "bottom-center", 
  theme: "bubble"
})

Vue.toasted.register(
  'defaultSucess',
  payload => !payload.msg ? 'Feito!' : JSON.parse(payload.msg.request.response).error,
  { type: 'sucess', theme: 'outline'}
) 

Vue.toasted.register(
  'defaultError',
  payload => !payload.msg ? 'Algo deu errado...' : JSON.parse(payload.msg.request.response).error,
  { type: 'error', theme: 'outline'}
) 

