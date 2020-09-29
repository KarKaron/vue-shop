<template>
  <div class="v-cart-item">
    <img class="v-cart-item__image" :src="require('../../assets/images/' + cartItemData.image)" :alt="cartItemData.name">
    <div class="v-cart-item__info">
      <h3>{{cartItemData.name}}</h3>
      <p>Article: <span class="text-blue">{{cartItemData.article}}</span></p>
      <p>Price: <span class="text-red">{{cartItemData.price | toFix | formattedPrice}}</span></p>
    </div>
    <div class="v-cart-item__quantity">
      <p>
        <span @click="decrementItem">
          <i class="material-icons">remove_circle</i>
        </span>
        {{cartItemData.quantity}}
        <span @click="incrementItem">
          <i class="material-icons">add_circle</i>
        </span>
      </p>
    </div>
    <span
      class="v-cart-item__btnDelete"
      @click="deleteCartItem"
    >
      <i class="material-icons">cancel</i>
    </span>
  </div>
</template>

<script>

import toFix from '../../filters/toFix'
import formattedPrice from '../../filters/price-format'

export default {
  name: 'v-cart-item',
  components: {},
  props: {
    cartItemData: {
      type: Object,
      default() {
        return {}
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
  computed: {},
  methods: {
    deleteCartItem() {
      this.$emit('deleteCartItem')
    },
    decrementItem() {
      this.$emit('decrementItem')
    },
    incrementItem() {
      this.$emit('incrementItem')
    }
  },
  watch: {},
  mounted() {}
}
</script>

<style lang="scss">
  .v-cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    flex-wrap: nowrap;
    box-shadow: 0 0 8px $shadow;
    padding: $padding*2;
    margin-bottom: $margin*2;
    &__info {
      text-align: left;
    }
    &__image {
      max-width: 50px;
      margin: $margin;
    }
    &__quantity p {
      margin: $margin;
      display: flex;
      align-items: center;
    }
    &__quantity span {
      padding: $padding;
      margin: $margin;
      color: $blue;
      cursor: pointer;
    }
    &__btnDelete {
      color: $red;
      cursor: pointer;
    }    
  }  
</style>