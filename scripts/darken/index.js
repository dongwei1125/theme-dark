import ProgressConstructor from './constructor/Progress'
import RateConstructor from './constructor/Rate'

const constructors = {
  ElProgress: ProgressConstructor,
  ElRate: RateConstructor,
}

const Darken = component => {
  if (!component) return

  /** Vue.use(Darken(ElementUI)) */
  if (component.Progress || component.Rate) {
    return install(component)
  }

  const name = component.name

  /** Vue.component(Progress.name, Darken(Progress)) */
  if (constructors[name]) {
    const constructor = constructors[name](component)

    /** Vue.use(Darken(Progress)) */
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
      Darken(component)?.install(Vue)
    })
  },
})

if (typeof window !== 'undefined' && window.Vue && window.ELEMENT) {
  Darken(window.ELEMENT)?.install(window.Vue)
}

export default Darken
