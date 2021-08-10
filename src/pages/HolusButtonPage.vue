<script>
import HolusButton from '@/components/button'
import HolusSpinner from '@/components/spinner'

export default {
  components: {
    HolusButton,
    HolusSpinner,
  },
  data() {
    return {
      type: null,
      loading: true,
    }
  },
  methods: {
    alertMessage() {
      alert('Hi! You have clicked on an HolusButton')
    },
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
      this.type = 'submit'
    }, 5000)
  },
}
</script>

<template>
  <div class="page" v-if="!loading">
    <HolusButton aria-label="Button" size="small" color="default" />
    <HolusButton aria-label="Button" size="small" color="primary" />
    <HolusButton aria-label="Button" size="small" color="success" />
    <HolusButton aria-label="Button" size="small" color="info" />
    <HolusButton aria-label="Button" size="small" color="alert" />
    <HolusButton aria-label="Button" size="small" color="error" />
    <!-- prettier-ignore -->
    <HolusButton aria-label="Button" direction="column">
      <span>;)</span><span>Button</span>
    </HolusButton>
    <div>
      <div>
        <div>
          <div>
            <HolusButton
              aria-label="Primary Button"
              :type="type"
              size="small"
              direction="row"
              rounded
              uppercase
            >
              :)
            </HolusButton>
          </div>
        </div>
      </div>
    </div>
    <form>
      <div>
        <div>
          <div>
            <HolusButton aria-label="Primary Button" />
          </div>
        </div>
      </div>
    </form>
    <form>
      <div>
        <div>
          <div>
            <HolusButton
              aria-label="Primary Button"
              type="button"
              size="large"
              @click="alertMessage"
            />
          </div>
        </div>
      </div>
    </form>
  </div>
  <HolusSpinner v-else />
</template>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;
  justify-self: flex-start;
  padding: 2rem;
}
</style>
