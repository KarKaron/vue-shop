<template>
  <div class="v-catalog">
    <h1>Catalog</h1>
    <div class="v-catalog__list">
      <vCatalogItem
        v-for="product in PRODUCTS"
        :key="product.id"
        :productData="product"
        @addToCart="showCartItemId"
      />
    </div>
  </div>
</template>

<script>

import vCatalogItem from './v-catalog-item'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "v-catalog",
  components: {vCatalogItem},
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapGetters([
      'PRODUCTS'
    ])
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API'
    ]),
    showCartItemId(data) {
      console.log(data)
    }
  },
  watch: {},
  mounted() {
    this.GET_PRODUCTS_FROM_API()
    .then((responce) => {
      if(responce.data) {
        console.log('Completed!')
      }
    })
  }
}
</script>

<style lang="scss">
  .v-catalog {
    text-align: center;
    h1 {
      margin: $margin*5 0;
    }
    &__list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>