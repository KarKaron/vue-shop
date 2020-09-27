<template>
  <div class="v-cart">
    <h1>Корзина</h1>
    <vCartItem
      v-for="(item, idx) in cartData"
      :key="item.id"
      :cartItemData="item"
      @deleteCartItem="deleteCartItem(idx)"
    />
  </div>
</template>

<script>

import vCartItem from './v-cart-item'
import {mapActions} from 'vuex'

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
  computed: {},
  methods: {
    ...mapActions([
      'DELETE_TO_CART'
    ]),
    deleteCartItem(idx) {
      this.DELETE_TO_CART(idx)
    }
  },
  watch: {},
  mounted() {}
}
</script>

<style lang="scss">
  
</style>