import ProgressConstructor from './constructor/Progress'
import RateConstructor from './constructor/Rate'

const constructors = {
  ElProgress: ProgressConstructor,
  ElRate: RateConstructor,
}

const darken = component => {
  if (!component) return

  /** Vue.use(darken(ElementUI)) */
  if (component.Progress || component.Rate) {
    return install(component)
  }

  const name = component.name

  /** Vue.component(Progress.name, darken(Progress)) */
  if (constructors[name]) {
    const constructor = constructors[name](component)

    /** Vue.use(darken(Progress)) */
    constructor.install = Vue => {
      Vue.component(component.name, constructor)
    }

    return constructor
  }
}

const install = ElementUI => ({
  install(Vue) {
    const { Progress, Rate } = ElementUI
    const components = [Progress, Rate]

    components.forEach(component => {
      darken(component)?.install(Vue)
    })
  },
})

if (typeof window !== 'undefined' && window.Vue && window.ELEMENT) {
  darken(window.ELEMENT)?.install(window.Vue)
}

export default darken
