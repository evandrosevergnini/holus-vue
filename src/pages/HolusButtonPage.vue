<template>
  <div>
    <div>
      <div>
        <div>
          <div>
            <div>
              <HolusButton
                label="Primary Button"
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
              <HolusButton label="Primary Button" />
            </div>
          </div>
        </div>
      </form>
      <form>
        <div>
          <div>
            <div>
              <HolusButton label="Primary Button" type="button" size="large" />
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import HolusButton from '@/components/button/HolusButton.vue'
export default {
  components: {
    HolusButton,
  },
  data() {
    return {
      type: null,
    }
  },
  mounted() {
    setTimeout(() => {
      this.type = 'submit'
    }, 5000)
  },
}
</script>

<style lang="scss" scoped></style>
