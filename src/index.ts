import './shared'
import './features'
import './entities'
import './widgets'
import { renderDOM } from './shared/utils'
import Navigation from './widgets/ui/NavigationPages'

window.addEventListener('DOMContentLoaded', () => {
    const rootNav = document.getElementById('nav')
    const navigationBlock = new Navigation()

    rootNav?.append(navigationBlock.element)

    renderDOM('login')
})
