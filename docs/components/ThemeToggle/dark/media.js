function getMediaQuery() {
  return window.matchMedia?.('(prefers-color-scheme: dark)') || null
}

const mediaQuery = getMediaQuery()

module.exports = {
  data() {
    return {
      mediaQuery,
      preferredDark: mediaQuery?.matches || false,
    }
  },
  computed: {
    system() {
      return this.preferredDark ? 'dark' : 'light'
    },
  },
  created() {
    this.addMediaQueryListener()
  },
  beforeDestory() {
    this.removeMediaQueryListener()
  },
  methods: {
    addMediaQueryListener() {
      if (!this.mediaQuery) return

      if (this.mediaQuery.addEventListener) {
        this.mediaQuery.addEventListener('change', this.mediaQueryHandler)
      } else {
        this.mediaQuery.addListener(this.mediaQueryHandler)
      }
    },

    removeMediaQueryListener() {
      if (!this.mediaQuery) return

      if (this.mediaQuery.removeEventListener) {
        this.mediaQuery.removeEventListener('change', this.mediaQueryHandler)
      } else {
        this.mediaQuery.removeListener(this.mediaQueryHandler)
      }
    },

    mediaQueryHandler(event) {
      this.preferredDark = event.matches
    },
  },
}
