<template>
  <div class="v-catalog-item">
    <img :src="require('../../assets/images/' + productData.image)" :alt="productData.name">
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
  name: 'v-catalog-item',
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
      this.$emit('addToCart', this.productData)
    }
  },
  watch: {},
  mounted() {
    this.$set(this.productData, 'quantity', 1)
  }
}
</script>

<style lang="scss">
  .v-catalog-item {
    flex-basis: 25%;
    box-shadow: 0 0 8px $shadow;
    padding: $padding*2;
    margin-bottom: $margin*2;
    img {
      width: 250px;
    }
    &__addToCart {
      background: $blue;
      border: 1px solid $blue;
      color: $white;
      border-radius: $radius;
    }
    &__addToCart:hover {
      background: $orange;
      border: 1px solid $orange;
      color: $black;
    }    
  }  
</style>