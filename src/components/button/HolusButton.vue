<template>
  <button
    class="holus-button"
    :class="classes"
    :type="c_type"
    v-on="$listeners"
    :aria-label="ariaLabel"
  >
    <slot>{{ ariaLabel }}</slot>
  </button>
</template>

<script>
import '@/assets/scss/main.scss'
export default {
  name: 'HolusButton',
  props: {
    ariaLabel: {
      type: String,
      required: true,
      validator: (prop) => prop.length > 0,
    },
    block: Boolean,
    color: {
      type: String,
      // prettier-ignore
      validator: (prop) => ['default', 'primary', 'success', 'info', 'alert', 'error'].includes(prop),
    },
    direction: {
      type: String,
      validator: (prop) =>
        ['row', 'row-reverse', 'column', 'column-reverse'].includes(prop),
    },
    outline: Boolean,
    rounded: Boolean,
    size: {
      type: String,
      default: 'normal',
      validator: (prop) => ['small', 'normal', 'large'].includes(prop),
    },
    type: {
      type: String,
      validator: (prop) => ['submit', 'button', 'reset'].includes(prop),
    },
    uppercase: Boolean,
  },
  data() {
    return {
      c_type: null,
    }
  },
  computed: {
    classes() {
      return {
        'holus-button--block': this.block,
        [`holus-button--${this.color}`]: !!this.color,
        [`holus-button--${this.direction}`]: !!this.direction,
        'holus-button--outline': this.outline,
        'holus-button--rounded': this.rounded,
        [`holus-button--${this.size}`]: !!this.size && this.size !== 'normal',
        'holus-button--uppercase': this.uppercase,
      }
    },
  },
  watch: {
    type: {
      immediate: true,
      handler(newValue) {
        if (newValue) {
          this.c_type = newValue
          return
        }
        this.$nextTick(() => {
          if (this.isADescendentOfAForm()) this.c_type = 'submit'
          else this.c_type = 'button'
        })
      },
    },
  },
  methods: {
    isADescendentOfAForm() {
      return !!this.$el.closest('form')
    },
    setSizeClass() {
      return this.size ? { [`holus-button--${this.size}`]: true } : {}
    },
    setDirectionClass() {
      return this.direction ? { [`holus-button--${this.direction}`]: true } : {}
    },
  },
}
</script>

<style lang="scss" scoped>
@import './HolusButton';
</style>
