<template>
  <div class="v-catalog-item">

    <vPopup
      v-if="isInfoPopupVisible"
      :popupTitle="productData.name"
      @closePopup="closeInfoPopup"
      @addToCart="addToCart"
    >
      <img :src="require('../../assets/images/' + productData.image)" :alt="productData.name">
      <div>
        <p class="v-catalog-item__price">Article: <span class="text-blue">{{productData.article}}</span></p>
        <p class="v-catalog-item__price">Price: <span class="text-red">{{productData.price}} &#8381;</span></p>
      </div>      
    </vPopup>

    <img :src="require('../../assets/images/' + productData.image)" :alt="productData.name">
    <p class="v-catalog-item__name">{{productData.name}}</p>
    <p class="v-catalog-item__price">Price: <span class="text-red">{{productData.price}} &#8381;</span></p>
    <button
      class="material-icons showInfo"
      title="Show info"
      @click="showPopupInfo"
    > 
      remove_red_eye
    </button>
    <span 
      class="material-icons addToCart"
      title="Add to Cart" 
      @click="addToCart"
    >
      add_shopping_cart
    </span>    
  </div>
</template>

<script>

import vPopup from '../popup/v-popup'

export default {
  name: 'v-catalog-item',
  components: {
    vPopup
  },
  props: {
    productData: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data() {
    return {
      isInfoPopupVisible: false
    }
  },
  computed: {},
  methods: {
    addToCart() {
      this.$emit('addToCart', this.productData)
    },
    showPopupInfo() {
      this.isInfoPopupVisible = true
      //this.$emit('showPopupInfo', this.productData)
    },
    closeInfoPopup() {
      this.isInfoPopupVisible = false
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
    &__name {
      color: $blue;
    }
    img {
      width: 250px;
    }
    p {
      padding: $padding*.5;
    }       
  }  
</style>