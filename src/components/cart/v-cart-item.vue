<template>
  <div class="v-cart-item">
    <img class="v-cart-item__image" :src="require('../../assets/images/' + cartItemData.image)" :alt="cartItemData.name">
    <div class="v-cart-item__info">
      <h3>{{cartItemData.name}}</h3>
      <p>Article: {{cartItemData.article}}</p>
      <p>Price: {{cartItemData.price}} &#8381;</p>
    </div>
    <div class="v-cart-item__quantity">
      <p>
        <span class="btn" @click="decrementItem">-</span>
        {{cartItemData.quantity}}
        <span class="btn" @click="incrementItem">+</span>
      </p>
    </div>
    <button
      class="v-cart-item__btnDelete btn"
      @click="deleteCartItem"
    >
      &times;
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
    }
    &__quantity span {
      padding: $padding;
      margin: $margin;
    }
    &__quantity .btn {
      background: $blue-light;
      color: $white;
      border: 1px solid $blue-light;
      border-radius: $radius;
      padding: $padding-btn !important;
    }
    &__btnDelete {
      background: $red;
      color: $white;
      border: 1px solid $red;
      border-radius: $radius;
      padding: $padding-btn !important;
    }
    &__btnDelete:hover {
      background: $orange;
      color: $black;
      border: 1px solid $orange;
    }
  }  
</style>