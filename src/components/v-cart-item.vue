<template>
  <div class="v-cart-item">
    <img class="v-cart-item__image" :src="require('../assets/images/' + cartItemData.image)" :alt="cartItemData.name">
    <div class="v-cart-item__info">
      <p>{{cartItemData.name}}</p>
      <p>Price: {{cartItemData.price}} &#8381;</p>
      <p>Article: {{cartItemData.article}}</p>
    </div>
    <div class="v-cart-item__quantity">
      <p>Qty</p>
      {{cartItemData.quantity}}
    </div>
    <button
      class="v-cart-item__btnDelete btn"
      @click="deleteCartItem"
    >
      Delete
    </button>
  </div>
</template>

<script>
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
  computed: {},
  methods: {
    deleteCartItem() {
      this.$emit('deleteCartItem')
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
    box-shadow: 0 0 8px #e0e0e0;
    padding: $padding*2;
    margin-bottom: $margin*2;
    &__image {
      max-width: 50px;
      margin: $margin;
    }
  }  
</style>