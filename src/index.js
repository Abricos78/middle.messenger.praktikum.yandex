import app from './app/index.hbs';
import { ErrorPage, LoginPage, SigninPage, ProfilePage, ProfileDataPage, ProfilePasswordPage } from './pages'
import './shared';
import './features';
import './entities';

const render = () => {
    const html = ProfilePasswordPage()
    const root = document.getElementById('root')
    root.innerHTML = html
}

window.addEventListener('DOMContentLoaded', render)