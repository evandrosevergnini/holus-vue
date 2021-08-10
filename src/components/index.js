import '@/assets/scss/main.scss'

import HolusButton from '@/components/button/HolusButton.vue'

export default {
  install(Vue, options) {
    let prefix = ''
    if (options && 'prefix' in options) {
      prefix = `${options.prefix}`
      prefix = prefix.charAt(0).toUpperCase() + prefix.slice(1)
    } else {
      prefix = `Holus`
    }
    Vue.component(`${prefix}Button`, HolusButton)
  },
}

export { HolusButton }
