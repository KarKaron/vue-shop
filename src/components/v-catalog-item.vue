<template>
  <div class="v-catalog-item">
    <img class="v-catalog_item__img" :src="require('../assets/images/' + productData.image)" :alt="productData.name">
    <p class="v-catalog-item__name">{{productData.name}}</p>
    <p class="v-catalog-item__price">Price: {{productData.price}} &#8381;</p>
    <button 
      class="v-catalog-item__addToCart btn" 
      @click="addToCart"
    >
      Add to cart
    </button>
  </div>
</template>

<script>
export default {
  name: "v-catalog-item",
  components: {},
  props: {
    productData: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data() {
    return {}
  },
  computed: {},
  methods: {
    addToCart() {
      this.$emit('addToCart', this.productData.id)
    }
  },
  watch: {},
  mounted() {}
}
</script>

<style lang="scss">
  .v-catalog-item {
    flex-basis: 25%;
    box-shadow: 0 0 8px #e0e0e0;
    padding: $padding*2;
    margin-bottom: $margin*2;
  }

  .v-catalog_item__img {
    width: 250px;
  }
  
</style>