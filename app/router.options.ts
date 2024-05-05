import type { RouterConfig } from '@nuxt/schema'

import { navigateToElementUtil } from '../common/utils/navigate-to-element.util'

const findEl = (hash: string, x = 0) => {
  return (
    document.querySelector(hash) ||
    new Promise((resolve) => {
      if (x > 50) return resolve(undefined)
      setTimeout(() => {
        resolve(findEl(hash, ++x || 1))
      }, 100)
    })
  )
}

// https://router.vuejs.org/api/#routeroptions
export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    const nuxtApp = useNuxtApp()
    const error = useError()
    return new Promise((resolve) => {
      if (to.hash) {
        // if element not found nothing happened
        setTimeout(async () => {
          const el = (await findEl(to.hash)) as HTMLElement | undefined
          if (!el) return
          resolve(navigateToElementUtil(el))
        })
      }
      // do nothing if paths are same, previous route does not have name and its not an error
      else if (!from.name && !error.value) return undefined
      else if (savedPosition) {
        // if paths are same page:finish not triggered
        if (to.path !== from.path) {
          nuxtApp.hook('page:finish', () => {
            resolve(savedPosition)
          })
        } else resolve({ left: 0, top: 0, behavior: 'smooth' })
      } else resolve({ left: 0, top: 0 })
    })
  },
}
