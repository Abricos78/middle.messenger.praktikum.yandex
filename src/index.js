import app from './app/index.hbs';
import './shared';

const render = () => {
    const html = app()
    const root = document.getElementById('root')
    root.innerHTML = html
}

window.addEventListener('DOMContentLoaded', render)