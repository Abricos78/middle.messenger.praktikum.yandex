import './shared'
import './features'
import './entities'
import './widgets'
import {
    LoginPage,
    MainPage,
    NotFoundPage,
    ProfileDataPage,
    ProfilePage,
    ProfilePasswordPage,
    SigninPage,
} from './pages'
import Router from './shared/Router'
import controller from './shared/controller'

enum ROUTES {
    MAIN = '/',
    AUTH = '/auth',
    SIGNUP = '/signup',
    PROFILE = '/profile',
    PROFILE_DATA = '/profileData',
    PROFILE_PASSWORD = '/profilePassword',
    NOT_FOUND = '*'
}

window.addEventListener('DOMContentLoaded', async (): Promise<void> => {
    Router
        .use(ROUTES.MAIN, MainPage)
        .use(ROUTES.AUTH, LoginPage)
        .use(ROUTES.SIGNUP, SigninPage)
        .use(ROUTES.PROFILE, ProfilePage)
        .use(ROUTES.PROFILE_DATA, ProfileDataPage)
        .use(ROUTES.PROFILE_PASSWORD, ProfilePasswordPage)
        .use(ROUTES.NOT_FOUND, NotFoundPage)
    let authRoutes = false

    switch (window.location.pathname) {
        case ROUTES.AUTH:
        case ROUTES.SIGNUP:
            authRoutes = true
            break
    }

    try {
        await controller.getUserInfo()
        Router.start()
        if (authRoutes) Router.go('/')
    } catch (e) {
        Router.start()

        Router.go(ROUTES.AUTH)
    }
})
