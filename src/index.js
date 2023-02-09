import app from './app/index.hbs';
import {
    ErrorPage,
    LoginPage,
    SigninPage,
    ProfilePage,
    ProfileDataPage,
    ProfilePasswordPage,
    MainPage,
} from './pages'
import './shared';
import './features';
import './entities';
import './widgets';
import avatarIcon from '../static/icons/Avatar.svg';
import ArrowLeft from '../static/icons/ArrowLeft.svg';
import ArrowRight from '../static/icons/ArrowRight.svg';

const PROPS = {
    ERROR: {
        404: {
            code: 404,
            message: 'Не туда попали'
        },
        505: {
            code: 505,
            message: 'Мы уже фиксим'
        }
    },
    ProfilePage: {
        icons: {
            button: ArrowLeft,
            avatar: avatarIcon,
        }
    },
    ProfileDataPage: {
        icons: {
            button: ArrowLeft,
            avatar: avatarIcon,
        }
    },
    ProfilePasswordPage: {
        icons: {
            button: ArrowLeft,
            avatar: avatarIcon,
        }
    },
    MainPage: {
        icons: {
            button: ArrowRight,
        }
    }
}

const render = () => {
    const html = MainPage({
        icons: {
            button: ArrowRight,
        }
    })
    const root = document.getElementById('root')
    root.innerHTML = html
}

window.addEventListener('DOMContentLoaded', render)