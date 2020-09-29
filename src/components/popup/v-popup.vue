<template>
  <div class="overlay" ref="overlay">
    <div class="v-popup">
      <div class="v-popup__header">
        <h3>{{popupTitle}}</h3>
        <span>
          <i
            class="material-icons pointer"
            @click="closePopup"
          >
            close
          </i>
        </span>
      </div>
      <div class="v-popup__body">
        <slot></slot>
      </div>
      <div class="v-popup__footer">
        <span 
          class="material-icons addToCart"
          title="Add to Cart" 
          @click="addToCart"
        >
          add_shopping_cart
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-popup',
  components: {},
  props: {
    popupTitle: {
      type: String,
      default: 'Popup Title'
    }
  },
  data() {
    return {}
  },
  computed: {},
  methods: {
    closePopup() {
      this.$emit('closePopup')
    },
    addToCart() {
      this.$emit('addToCart')
    }
  },
  watch: {},
  mounted() {
    let rem = this
    document.addEventListener('click', function (item) {
      if (item.target === rem.$refs['overlay']) {
        rem.closePopup()
      }
    })
  }
}
</script>

<style lang="scss">
  .v-popup {
    position: fixed;
    top: 15px;
    box-shadow: 0 0 8px $shadow;
    z-index: 9999;
    padding: $padding*2;
    background: $white;
    border-radius: $radius;
    &__header, &__footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__body {
      text-align: left;
      align-items: top;
      margin-top: $margin;
      img {
        width: 320px!important;
      }
      p {
        padding: $padding;
      }
    }    
  }
</style>