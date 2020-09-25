<template>
  <div class="v-catalog">
    <h1>Catalog</h1>
    <vCatalogItem />
  </div>
</template>

<script>

import vCatalogItem from "./v-catalog-item"

export default {
  name: "v-catalog",
  components: {vCatalogItem},
  props: {},
  data() {
    return {}
  },
  computed: {},
  methods: {},
  watch: {},
  mounted() {}
}
</script>

<style lang="scss">
  
</style>