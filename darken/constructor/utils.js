export function insertStyleElement(content) {
  if (typeof document === 'undefined') return

  const style = document.createElement('style')

  style.appendChild(document.createTextNode(content))
  document.head.appendChild(style)
}
