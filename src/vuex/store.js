import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    products: [],
    cart: []
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products
    },
    SET_CART: (state, product) => {
      if (state.cart.length) {
        let isProductExist = false
        state.cart.map(function(item) {
          if (item.id === product.id) {
            isProductExist = true
            item.quantity++
          } 
        })
        if (!isProductExist) {
          state.cart.push(product)
        }
      } else {
        state.cart.push(product)
      }      
    },
    REMOVE_ITEM_CART: (state, idx) => {
      state.cart.splice(idx, 1)
    }
  },
  actions: {
    GET_PRODUCTS_FROM_API({commit}) {
      return axios('http://localhost:3000/products', {
        method: 'GET'
      })
      .then((products) => {
        commit('SET_PRODUCTS_TO_STATE', products.data)
        return products
      })
      .catch((error) => {
        console.log(error)
        return error
      })
    },
    ADD_TO_CART({commit}, product) {
      commit('SET_CART', product)
    },
    DELETE_TO_CART({commit}, idx) {
      commit('REMOVE_ITEM_CART', idx)
    }
  },
  getters: {
    PRODUCTS(state) {
      return state.products
    },
    CART(state) {
      return state.cart
    }
  }
})

export default store