import {
    Error505,
    Error404,
    LoginPage,
    SigninPage,
    MainPage,
    ProfilePage,
    ProfileDataPage,
    ProfilePasswordPage
} from '../../pages'
import type Block from '../common/Block'

const Routes = {
    404: Error404,
    505: Error505,
    login: LoginPage,
    signin: SigninPage,
    main: MainPage,
    profile: ProfilePage,
    profileData: ProfileDataPage,
    profilePassword: ProfilePasswordPage
}

let currentPage: Block | null = null

const renderDOM = (pageName: keyof typeof Routes): void => {
    const root = document.getElementById('root')!
    root.innerHTML = ''

    if (currentPage) currentPage.dispatchComponentWillUnmount()

    const page = new Routes[pageName]()
    currentPage = page

    root.append(page.element)

    page.dispatchComponentDidMount()
}

export default renderDOM
