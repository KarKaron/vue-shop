<template>
  <div class="v-main-wrapper">
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
    max-width: 900px;
    margin: 0 auto;
  }
</style>