<script>
import '@/assets/scss/main.scss'
export default {
  name: 'HolusButton',
  props: {
    label: {
      type: String,
      required: true,
      validator: (prop) => prop.length > 0,
    },
    type: {
      type: String,
      validator: (prop) => ['submit', 'button', 'image'].includes(prop),
    },
    block: Boolean,
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
    uppercase: Boolean,
  },
  data() {
    return {
      c_type: null,
    }
  },
  computed: {
    listeners() {
      return Object.assign({}, this.$listeners, {})
    },
    classes() {
      return {
        'holus-button--block': this.block,
        'holus-button--outline': this.outline,
        'holus-button--rounded': this.rounded,
        'holus-button--uppercase': this.uppercase,
        [`holus-button--${this.size}`]: !!this.size,
        [`holus-button--${this.direction}`]: !!this.direction,
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

<template>
  <button
    class="holus-button"
    :class="classes"
    :type="c_type"
    v-on="listeners"
    :aria-label="label"
  >
    <slot>{{ label }}</slot>
  </button>
</template>

<style lang="scss" scoped>
@import './HolusButton';
</style>
