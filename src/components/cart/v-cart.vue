<template>
  <div class="v-cart">
    <router-link :to="{name: 'catalog'}">
      <div class="v-catalog__link">
        <span class="material-icons cart-icon">
          keyboard_return
        </span>
      </div>
    </router-link>
    <h1>Корзина</h1>
    <p v-if="!cartData.length">They are no products in cart...</p>
    <vCartItem
      v-for="(item, idx) in cartData"
      :key="item.id"
      :cartItemData="item"
      @deleteCartItem="deleteCartItem(idx)"
      @decrementItem="decrementItem(idx)"
      @incrementItem="incrementItem(idx)"
    />
    <div class="v-cart__total" v-if="cartData.length">
      <p class="total__name">Total:</p>
      <p>{{cartTotal | toFix | formattedPrice}}</p>
    </div>
  </div>
</template>

<script>

import {mapActions} from 'vuex'
import toFix from '../../filters/toFix'
import formattedPrice from '../../filters/price-format'

import vCartItem from './v-cart-item'

export default {
  name: 'v-cart',
  components: {
    vCartItem
  },
  props: {
    cartData: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {}
  },
  filters: {
    toFix,
    formattedPrice
  },
  computed: {
    cartTotal() {
      let result = []

      if (this.cartData.length) {
        for(let item of this.cartData) {
          result.push(item.price*item.quantity)
        }
        result = result.reduce(function(sum, current){
          return sum+current
        })
        return result
      } else {
        return 0
      }
    }  
  },
  methods: {
    ...mapActions([
      'DECREMENT_ITEM',
      'INCREMENT_ITEM',
      'DELETE_TO_CART'
    ]),
    deleteCartItem(idx) {
      this.DELETE_TO_CART(idx)
    },
    decrementItem(idx) {
      this.DECREMENT_ITEM(idx)
    },
    incrementItem(idx) {
      this.INCREMENT_ITEM(idx)
    }
  },
  watch: {},
  mounted() {}
}
</script>

<style lang="scss">
  .v-cart {
    margin-bottom: $margin*10;
    &__total {
      position: fixed;
      bottom: 0;
      right: 0;
      left: 0;
      padding: $padding*2;
      display: flex;
      justify-content: center;
      background: $orange;
      color: $black;
      font-size: 20px;
    }
    .total__name {
      margin-right: $margin*2; 
    }
  }
</style>