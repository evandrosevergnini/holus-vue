<script>
import '@/assets/scss/main.scss'
export default {
  name: 'HolusFlex',
  props: {
    direction: {
      type: String,
      default: 'row',
      validator: (prop) =>
        ['row', 'row-reverse', 'column', 'column-reverse'].includes(prop),
    },
    wrap: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    classes() {
      return {
        [`holus-flex--${this.direction}`]: true,
        [`holus-flex--${this.wrap}`]: !!this.wrap,
      }
    },
  },
}
</script>

<template>
  <div class="holus-flex" :class="classes" v-on="$listeners"><slot></slot></div>
</template>

<style lang="scss" scoped>
@import './HolusFlex';
</style>
