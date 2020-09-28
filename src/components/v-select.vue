<template>
  <div class="v-select">
    <label for="vSelect">Select option</label>
    <p
      id="vSelect"
      class="v-select__title"
      @click="areOptionsVisible = !areOptionsVisible"
    >
      {{selected}}
    </p>
    <div 
      class="v-select__options"
      v-if="areOptionsVisible || isExpanded"
    >
      <p
        v-for="option in categories"
        :key=option.value
        @click="selectOption(option)"
      >
        {{option.name}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-select',
  components: {},
  props: {
    categories: {
      type: Array,
      default() {
        return []
      }
    },
    selected: {
      type: String,
      default: 'Selected Option'
    },
    isExpanded: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      areOptionsVisible: false
    }
  },
  computed: {},
  methods: {
    selectOption(option) {
      this.$emit('select', option)
      this.areOptionsVisible = false
    },
    hideSelect() {
      this.areOptionsVisible = false
    }
  },
  watch: {},
  mounted() {
    document.addEventListener('click', this.hideSelect.bind(this), true)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.hideSelect)
  }
}
</script>

<style lang="scss">
  .v-select {
    position: relative;
    width: 200px;
    margin-bottom: $margin*3;
    cursor: pointer;
    label {
      position: absolute;
      top: -21px;
      left: 0;
    }
    &__title {
      border: 1px solid $shadow;
      text-align: left;
      padding: $padding;
      width: 100%;
      color: $blue;
    }
    &__title:hover {
      color: $blue-light;
    }
    &__options {
      border: 1px solid $shadow;
      position: absolute;
      top: 37px;
      right: -18px;
      width: 100%;
      text-align: left;
      padding: $padding;
      background: $white;
      z-index: 100;
      box-shadow: 0 0 8px $shadow;
    }
    &__options p {
      padding: $padding;
    }
    &__options p:hover {
      background: $shadow;
    }
  } 
</style>