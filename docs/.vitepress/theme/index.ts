import { inBrowser } from 'vitepress'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './styles/index.css'
const theme: Theme = {
  ...DefaultTheme,
  enhanceApp({ router }) {
    if (inBrowser) {

      window.addEventListener('hashchange', () => {
        const { href: url } = window.location
      })

      router.onAfterRouteChanged = (to) => {
      }
    }
  }
}

export default theme
