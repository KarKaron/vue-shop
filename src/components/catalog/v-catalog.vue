<template>
  <div class="v-catalog">
    <router-link :to="{name: 'cart', params: {cartData: CART}}">
      <div class="v-catalog__link">
        <span class="material-icons cart-icon">
          shopping_cart
        </span>
        <span
          class="cart-item"
          v-if="CART.length"
        >
          {{CART.length}}
        </span>
      </div>
    </router-link>
    <h1>Catalog</h1>
    <div class="filters">
      <vSelect 
        :categories="categories"
        :selected="selected"
        @select="sortByCategories"
        :isExpanded="IS_DESKTOP"
      />
      <div class="range-slider">
        <input 
          type="range" min="0" max="10000" step="100"
          v-model.number="minPrice"
          @change="setRangeSliders"
        >
        <input 
          type="range" min="0" max="10000" step="100"
          v-model.number="maxPrice"
          @change="setRangeSliders"
        >
      </div>
      <div class="range-values">
        <p>Min: {{minPrice}}</p>
        <p>Max: {{maxPrice}}</p>
      </div>
    </div>
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
      sortedProducts: [],
      minPrice: 0,
      maxPrice: 10000
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
    setRangeSliders() {
      if (this.minPrice > this.maxPrice) {
        let tmp = this.maxPrice
        this.maxPrice = this.minPrice
        this.minPrice = tmp
      }
      this.sortByCategories()
    },
    sortByCategories(category) {
      /* this.sortedProducts = []
      let rem = this
      this.PRODUCTS.map(function(item){
        if (item.category === category.value) {
          rem.sortedProducts.push(item)
        }
      })
      this.selected = category.name */
      let rem = this
      this.sortedProducts = [...this.PRODUCTS]
      this.sortedProducts = this.sortedProducts.filter(function (item) {
        return item.price >= rem.minPrice && item.price <= rem.maxPrice
      })
      if(category) {
        this.sortedProducts = this.sortedProducts.filter(function (e) {
          rem.selected = category.name
          return e.category === category.value
        })
      }
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
    this.sortByCategories()
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
      .cart-icon {
        font-size: 45px;
        color: $blue;
      }
      .cart-item {
        position: absolute;
        right: 10px;
        top: 10px;
        background: $orange;
        color: $white;
        border-radius: 50%;
        padding: 2px 8px;
      }
    }
  }
  .filters {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .range-slider {
    width: 200px;
    margin: auto 0;
    text-align: center;
    position: relative;
    background: $shadow;
  }
  .range-slider svg, .range-slider input[type=range] {
    -webkit-appearance: none;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    background: $shadow;
  }
  input[type=range]::-webkit-slider-thumb {
    z-index: 2;
    position: relative;
    top: 2px;
    margin-top: -5px;
  }  
</style>