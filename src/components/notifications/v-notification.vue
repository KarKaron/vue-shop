<template>
  <div class="v-notification">
    <transition-group
      name="v-tarnsition-animate"
      class="messages-list"
    >
      <div
        class="v-notification__content"
        v-for="message in messages"
        :key="message.id"
      >
        <div class="content__text">
          <i class="material-icons">check_circle</i>
          <span>{{message.name}}</span>        
        </div>
        <div class="content__button">
          <button v-if="rightBtn.length">{{rightBtn}}</button>
          <button v-if="leftBtn.length">{{leftBtn}}</button>
        </div>
      </div> 
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'v-notification',
  components: {},
  props: {
    messages: {
      type: Array,
      default: () => {
        return []
      }
    },
    rightBtn: {
      type: String,
      default: ''
    },
    leftBtn: {
      type: String,
      default: ''
    },
    timeout: {
      type: Number,
      default: 3000
    }
  },
  data() {
    return {}
  },
  computed: {},
  methods: {
    hideNotification() {
      let rem = this
      if (this.messages.length) {
        setTimeout(function(){
          rem.messages.splice(rem.messages.length - 1, 1)
        }, rem.timeout)
      }      
    }
  },
  watch: {
    messages() {
      this.hideNotification()
    }
  },
  mounted() {
    this.hideNotification()
  }
}
</script>

<style lang="scss">
  .v-notification {
    position: fixed;
    top: 80px;
    right: 16px;
    z-index: 10;
    &__messages-list {
      display: flex;
      flex-direction: column-reverse;
    }
    &__content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 35px;
      background: $green;
      border-radius: $radius;
      color: $white;
      padding: $padding*2;
      margin-bottom: $margin*2;
      .content__text {
        display: flex;
        align-items: center;
        span {
          margin-left: $margin; 
        }
      }
    }
    .v-tarnsition-animate {
      &-enter {
        transform: translateX(120px);
        opacity: 0;
      }
      &-enter-active {
        transition: all .6s ease;
      }
      &-enter-to {
        opacity: 1;
      }
      &-leave {
        height: 35px;
        opacity: 1;
      }
      &-leave-active {
        transition: transform .6s ease, opacity .6s, height .6s .2s;
      }
      &-leave-to {
        height: 0;
        transform: translateX(120px);
        opacity: 0;
      }
      &-move {
        transition: transform .6s ease;
      } 
    }
  }
</style>