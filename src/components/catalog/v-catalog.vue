<template>
  <div class="v-catalog">
    <router-link :to="{name: 'cart', params: {cartData: CART}}">
      <div class="v-catalog__link btn">Cart: {{CART.length}}</div>
    </router-link>
    <h1>Catalog</h1>
    <vSelect 
      :categories="categories"
      :selected="selected"
      @select="sortByCategories"
      :isExpanded="IS_DESKTOP"
    />
    <div class="v-catalog__list">
      <vCatalogItem
        v-for="product in filteredProducts"
        :key="product.id"
        :productData="product"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>

import {mapActions, mapGetters} from 'vuex'
import vCatalogItem from './v-catalog-item'
import vSelect from '../v-select'

export default {
  name: 'v-catalog',
  components: {
    vCatalogItem,
    vSelect
  },
  props: {},
  data() {
    return {
      categories:[
        {name: 'All', value: 0},
        {name: 'Man', value: 1},
        {name: 'Women', value: 2}
      ],
      selected: 'All',
      sortedProducts: []
    }
  },
  computed: {
    ...mapGetters([
      'PRODUCTS',
      'CART',
      'IS_DESKTOP'
    ]),
    filteredProducts() {
      if (this.sortedProducts.length) {
        return this.sortedProducts
      } else {
        return this.PRODUCTS
      }
    }
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API',
      'ADD_TO_CART'
    ]),
    addToCart(data) {
      this.ADD_TO_CART(data)
    },
    sortByCategories(category) {
      this.sortedProducts = []
      let rem = this
      this.PRODUCTS.map(function(item){
        if (item.category === category.value) {
          rem.sortedProducts.push(item)
        }
      })
      this.selected = category.name
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