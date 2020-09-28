<template>
  <div id="app">
    <vMainWrapper />
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import vMainWrapper from "./components/v-main-wrapper"

export default {
  name: "App",
  components: {
    vMainWrapper
  },
  computed: {
    ...mapGetters([
      'IS_MOBILE',
      'IS_DESKTOP'
    ])
  },  
  methods: {
    ...mapActions([
      'SET_MOBILE',
      'SET_DESKTOP'
    ])
  },
  mounted() {
    let rem = this
    window.addEventListener('resize', function() {
      if (window.innerWidth > 767) {
        rem.SET_DESKTOP()
        //console.log('IS_DESKTOP', rem.IS_DESKTOP)
      } else {
        rem.SET_MOBILE()
        //console.log('IS_MOBILE', rem.IS_MOBILE)
      }
    })
  }
};
</script>