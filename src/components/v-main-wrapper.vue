<template>
  <div class="v-main-wrapper">
    <vHeader/>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>

import vHeader from './layouts/v-header'

export default {
  name: "v-main-wrapper",
  components: {
    vHeader
  },
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
  .v-main-wrapper {
    text-align: center;
  }
</style>