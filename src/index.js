import app from './app/index.hbs';
import { ErrorPage, LoginPage, SigninPage, ProfilePage } from './pages'
import './shared';
import './features';

const render = () => {
    const html = ProfilePage()
    const root = document.getElementById('root')
    root.innerHTML = html
}

window.addEventListener('DOMContentLoaded', render)