<template>
  <div class="holus-spinner">Loading...</div>
</template>

<script>
export default {
  name: 'HolusSpinner',
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style>
.holus-spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  width: 100%;
  height: 100%;
  min-height: 6rem;
}
</style>
