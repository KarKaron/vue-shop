export default {
  SWITCH_MOBILE: (state) => {
    state.isMobile = true
    state.isDesktop = false 
  },
  SWITCH_DESKTOP: (state) => {
    state.isDesktop = true 
    state.isMobile = false
  },  
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
  },
  DECREMENT_ITEM: (state, idx) => {
    if (state.cart[idx].quantity > 1) {
      state.cart[idx].quantity--
    }
  },
  INCREMENT_ITEM: (state, idx) => {
    state.cart[idx].quantity++
  }
}