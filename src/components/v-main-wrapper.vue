<template>
  <div class="v-main-wrapper">
    <vCatalog />
    <vCart 
      v-if="CART.length"
      :cartData="CART"
    /> 
  </div>
</template>

<script>

import vCatalog from './v-catalog'
import vCart from './v-cart'
import {mapGetters} from 'vuex'

export default {
  name: "v-main-wrapper",
  components: {
    vCatalog,
    vCart
  },
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapGetters([
      'CART'
    ])
  },
  methods: {},
  watch: {},
  mounted() {}
}
</script>

<style lang="scss">
  .v-main-wrapper {
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
  }
</style>