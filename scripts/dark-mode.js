import { scripts } from '../theme.config'

const { storageKey } = scripts
const store = localStorage.getItem(`${storageKey}`)
const mediaQuery = window.matchMedia?.('(prefers-color-scheme: dark)')
const preferredDark = mediaQuery?.matches || false

if (store === 'auto' ? preferredDark : store === 'dark') {
  document.documentElement.classList.add('dark')
}
