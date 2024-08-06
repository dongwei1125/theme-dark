<template>
  <theme-switch ref="switch" v-model="isDark" class="theme-toggle" :before-change="beforeChange" />
</template>

<script>
import dark from './dark/index.js'

import ThemeSwitch from '../ThemeSwitch/index.vue'

export default {
  name: 'ThemeToggle',
  components: { ThemeSwitch },
  mixins: [dark],
  methods: {
    beforeChange() {
      return new Promise(resolve => {
        if (!document.startViewTransition) {
          return resolve(true)
        }

        const switchElement = this.$refs.switch?.$el
        const rect = switchElement.getBoundingClientRect()
        const x = rect.left + rect.width / 2
        const y = rect.top + rect.height / 2
        const endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))

        const transition = document.startViewTransition(async () => {
          resolve(true)
          await this.$nextTick()
        })

        transition.ready.then(() => {
          const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`]

          document.documentElement.animate(
            {
              clipPath: this.isDark ? [...clipPath].reverse() : clipPath,
            },
            {
              duration: 400,
              easing: 'ease-in',
              pseudoElement: this.isDark ? '::view-transition-old(root)' : '::view-transition-new(root)',
            }
          )
        })
      })
    },
  },
}
</script>

<style>
::view-transition-new(root),
::view-transition-old(root) {
  animation: none;
}

.dark::view-transition-old(root) {
  z-index: 2147483646;
}
</style>
