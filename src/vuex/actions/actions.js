export default {
  SET_SEARCH_VALUE({commit}, value) {
    commit('SET_SEARCH_VALUE', value)
  },
  SET_MOBILE({commit}) {
    commit('SWITCH_MOBILE')
  },
  SET_DESKTOP({commit}) {
    commit('SWITCH_DESKTOP')
  },  
  ADD_TO_CART({commit}, product) {
    commit('SET_CART', product)
  },
  DELETE_TO_CART({commit}, idx) {
    commit('REMOVE_ITEM_CART', idx)
  },
  DECREMENT_ITEM({commit}, idx) {
    commit('DECREMENT_ITEM', idx)
  },
  INCREMENT_ITEM({commit}, idx) {
    commit('INCREMENT_ITEM', idx)
  }
}