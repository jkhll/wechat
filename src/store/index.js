
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    user: ''
  },
  mutations: {
    login (state, name) {
      console.log('sajkjkjkjkjjjkkkdh')
      state.user = name
    }
  }
})

export default store
