<template>
  <div class="theme-toggle" @click.stop="switchTheme" @keydown.enter.stop="() => resolve(true)">
    <theme-switch v-model="isDark" :before-change="beforeChange" />
  </div>
</template>

<script>
import dark from './dark/index.js'

import ThemeSwitch from '../ThemeSwitch/index.vue'

export default {
  name: 'ThemeToggle',
  components: { ThemeSwitch },
  mixins: [dark],
  data() {
    return {
      resolve: null,
      beforeChange: () =>
        new Promise(resolve => {
          this.resolve = resolve
        }),
    }
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
            clipPath: this.isDark ? [...clipPath].reverse() : clipPath,
          },
          {
            duration: 400,
            easing: 'ease-in',
            pseudoElement: this.isDark ? '::view-transition-old(root)' : '::view-transition-new(root)',
          }
        )
      })
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
