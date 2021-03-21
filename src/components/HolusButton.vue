<template>
  <button class="holus-button" :type="type" v-on="listeners">
    <slot>{{ label }}</slot>
  </button>
</template>

<script>
import "@/assets/scss/main.scss";
export default {
  props: {
    label: {
      type: String,
      default: "Button",
    },
    type: {
      type: String,
      default: "button",
    },
  },
  computed: {
    listeners: function () {
      return Object.assign({}, this.$listeners, {});
    },
  },
};
</script>

<style lang="scss" scoped>
.holus-button {
  padding: var(--h-spacing-normal);
}
</style>
