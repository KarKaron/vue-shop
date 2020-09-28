import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations/mutations'
import commonActions from './actions/actions'
import apiRequest from './actions/api-request'
import getters from './getters/getters'

const actions = {...commonActions, ...apiRequest}

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    isMobile: false,
    isDesktop: true,
    products: [],
    cart: []
  },
  mutations,
  actions,
  getters
})

export default store