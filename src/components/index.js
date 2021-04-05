import HolusButton from '@/components/button/HolusButton.vue'
import '@/assets/scss/main.scss'
const HolusVue = {
  install(Vue, options) {
    let prefix = ''
    if (options && 'prefix' in options) {
      prefix = `${options.prefix}-`
    } else {
      prefix = `holus-`
    }
    Vue.component(`${prefix}button`, HolusButton)
  },
}

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(HolusVue)
}

export default HolusVue
