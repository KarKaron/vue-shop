<template>
  <div class="v-main-wrapper">
    <h1>{{title}}</h1>
    <vCatalog />
    <vCatalogCart /> 
  </div>
</template>

<script>

import vCatalog from "./v-catalog"
import vCatalogCart from "./v-catalog-cart"

export default {
  name: "v-main-wrapper",
  components: {
    vCatalog, vCatalogCart
  },
  props: {},
  data() {
    return {
      title: "Main wrapper"
    }
  },
  computed: {},
  methods: {},
  watch: {},
  mounted() {}
}
</script>

<style lang="scss">
  .v-main-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    max-width: 1600px;
    margin: 0 auto;
    background: coral;
  }
</style>