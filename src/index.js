import CollapseTransition from './CollapseTransition'

export default CollapseTransition

export {
  CollapseTransition,
}

export function install(Vue) {
  Vue.component('CollapseTransition', CollapseTransition)
}

const plugin = {
  install,
}

let GlobalVue = null

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}

if (GlobalVue) {
  GlobalVue.use(plugin)
}
