export function insertStyleElement(content) {
  if (typeof window === 'undefined') return

  const style = document.createElement('style')

  style.appendChild(document.createTextNode(content))
  document.head.appendChild(style)
}
