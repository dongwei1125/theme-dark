<template>
  <div class="theme-toggle" @click="switchTheme">
    <theme-switch v-model="dark" :before-change="beforeChange" />
  </div>
</template>

<script>
import { hasClass, addClass, removeClass } from '../utils/dom.js'

import ThemeSwitch from './ThemeSwitch/index.vue'

const ClassName = 'dark'

export default {
  name: 'ThemeToggle',
  components: { ThemeSwitch },
  data() {
    return {
      dark: false,
      resolve: null,
      beforeChange: () =>
        new Promise(resolve => {
          this.resolve = resolve
        }),
    }
  },
  watch: {
    dark: {
      handler(value) {
        if (value) {
          this.open()
        } else {
          this.close()
        }
      },
      immediate: true,
    },
  },
  methods: {
    switchTheme(event) {
      if (!document.startViewTransition) {
        return this.resolve(true)
      }

      const x = event.clientX
      const y = event.clientY
      const endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))

      const transition = document.startViewTransition(async () => {
        this.resolve(true)
        await this.$nextTick()
      })

      transition.ready.then(() => {
        const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`]

        document.documentElement.animate(
          {
            clipPath: this.dark ? [...clipPath].reverse() : clipPath,
          },
          {
            duration: 400,
            easing: 'ease-in',
            pseudoElement: this.dark ? '::view-transition-old(root)' : '::view-transition-new(root)',
          }
        )
      })
    },

    open() {
      const withoutClassName = !hasClass(document.documentElement, ClassName)

      if (withoutClassName) {
        addClass(document.documentElement, ClassName)
      }
    },

    close() {
      removeClass(document.documentElement, ClassName)
    },
  },
}
</script>

<style scoped>
.theme-toggle {
  display: inline-block;
}
</style>

<style>
::view-transition-new(root),
::view-transition-old(root) {
  animation: none;
}

.dark::view-transition-old(root) {
  z-index: 2147483646;
}
</style>
