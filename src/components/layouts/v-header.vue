<template>
  <div class="v-header">
    <div class="v-header__wrapper">
      <nav>
        <router-link :to="{name: 'main'}">
          <img src="../../assets/images/logo.png" alt="Logo">
        </router-link>
        <ul>
          <router-link :to="{name: 'main'}">
            <li>Home</li>
          </router-link>
          <router-link :to="{name: 'catalog'}">
            <li>Catalog</li>
          </router-link>
        </ul>
      </nav>
      <form>
        <input 
          type="text"
          v-model="searchValue"
        >
        <span>
          <i
            class="material-icons"
            title="Clear search"
            @click="searchClear"            
          >
            repeat
          </i>
          <i 
            class="material-icons"
            title="Go search"
            @click="searchGo(searchValue)"
          >
            search
          </i>
        </span>        
      </form>
    </div>
  </div>
</template>

<script>

import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'v-header',
  components: {},
  props: {},
  data() {
    return {
      searchValue: ''
    }
  },
  computed: {
    ...mapGetters([
      'SEARCH_VALUE'
    ])
  },
  methods: {
    ...mapActions([
      'SET_SEARCH_VALUE'
    ]),
    searchGo(value) {
      this.SET_SEARCH_VALUE(value)
      if (this.$route.path !== '/catalog') {
        this.$router.push('/catalog')
      }
    },
    searchClear() {
      this.searchValue = ''
      this.SET_SEARCH_VALUE()
      if (this.$route.path !== '/catalog') {
        this.$router.push('/catalog')
      }
    }
  },
  watch: {},
  mounted() {}
}
</script>

<style lang="scss">
  .v-header {
    display: fixed;
    width: 100%;
    top: 0;
    background: $blue;
    padding: $padding 0;
    &__wrapper {
      max-width: 900px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      nav {
        display: flex;
        justify-content: start;
        img {
          width: 40px;
        }
        ul {
          display: flex;        
          list-style: none;
          justify-content: start;
          align-items: center;
          margin-left: $margin*3;
          li {
            color: $white;
            border: 1px solid $white;
            margin-right: $margin;
            padding: $padding $padding*2;
            border-radius: $radius;
            &:hover {
              color: $black;
              background: $blue-light;
              border: 1px solid $blue-light;
            }
            &.active {
              color: $black;
              background: $shadow;
              border: 1px solid $shadow;
            }
          }
        }
      }
      form {
        display: flex;
        align-items: center;
        input {
          padding: $padding;
          border-radius: $radius;
          border: none;
        }
        span {
          padding: $padding;
          i {
            background: transparent;
            cursor: pointer;
            margin-right: $margin;
            color: $white;
          }
        }
      }
    }
  }
</style>