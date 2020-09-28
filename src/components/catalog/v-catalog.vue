<template>
  <div class="v-catalog">
    <router-link :to="{name: 'cart', params: {cartData: CART}}">
      <div class="v-catalog__link btn">Cart: {{CART.length}}</div>
    </router-link>
    <h1>Catalog</h1>
    <div class="v-catalog__list">
      <vCatalogItem
        v-for="product in PRODUCTS"
        :key="product.id"
        :productData="product"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>

import vCatalogItem from './v-catalog-item'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "v-catalog",
  components: {
    vCatalogItem
  },
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapGetters([
      'PRODUCTS',
      'CART'
    ])
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API',
      'ADD_TO_CART'
    ]),
    addToCart(data) {
      this.ADD_TO_CART(data)
    }
  },
  watch: {},
  mounted() {
    this.GET_PRODUCTS_FROM_API()
    /*.then((responce) => {
      if(responce.data) {
        console.log('Completed!')
      }
    })*/
  }
}
</script>

<style lang="scss">
  .v-catalog {    
    &__list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
    }
    &__link {
      position: absolute;
      top: 10px;
      right: 10px;
      border: 1px solid $shadow;
    }
  }
</style>