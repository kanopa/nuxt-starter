const defaultRem = 16

export const navigateToElementUtil = (el: HTMLElement | Element) => {
  const calculatedTop = el.getBoundingClientRect().top + document.documentElement.scrollTop
  if ('scrollBehavior' in document.documentElement.style) {
    const marginTop = parseInt(el.parentElement ? getComputedStyle(el.parentElement).marginTop : '0')
    const documentStyles = getComputedStyle(document.documentElement)
    const headerHeightRem = parseFloat(documentStyles.getPropertyValue('--header-height'))
    const headerHeight = headerHeightRem * defaultRem

    const top = calculatedTop - marginTop - headerHeight
    return window.scrollTo({ top, behavior: 'smooth' })
  }
  window.scrollTo(0, calculatedTop)
}
