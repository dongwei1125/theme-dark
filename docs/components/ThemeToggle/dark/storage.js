const storage = window.localStorage
const key = 'el-theme-appearance'
const initValue = 'auto'

function getStorage() {
  const value = storage.getItem(key)

  if (value == null) {
    storage.setItem(key, initValue)

    return initValue
  }

  return value
}

const store = getStorage()

module.exports = {
  data() {
    return {
      store,
    }
  },
  watch: {
    store(newValue) {
      const oldValue = storage.getItem(key)

      if (newValue !== oldValue) {
        storage.setItem(key, newValue)
      }
    },
  },
  created() {
    this.addStorageListener()
  },
  beforeDestory() {
    this.removeStorageListener()
  },
  methods: {
    addStorageListener() {
      window.addEventListener('storage', this.storageHandler)
    },

    removeStorageListener() {
      window.removeEventListener('storage', this.storageHandler)
    },

    storageHandler(event) {
      if (event.key !== key) return

      this.store = event.newValue
    },
  },
}
