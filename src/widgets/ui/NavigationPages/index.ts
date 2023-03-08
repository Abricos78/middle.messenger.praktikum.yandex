import Block from '../../../shared/common/Block'
import template from './NavigationPages.hbs'
import './index.scss'
import Link from '../../../shared/ui/Link'
import { renderDOM } from '../../../shared/utils'

class Navigation extends Block {
    constructor() {
        super({
            505: new Link({
                content: '505',
                events: {
                    click: (e: Event) => {
                        e.preventDefault()
                        renderDOM(505)
                    }
                }
            }),
            404: new Link({
                content: '404',
                events: {
                    click: (e: Event) => {
                        e.preventDefault()
                        renderDOM(404)
                    }
                }
            }),
            LoginPage: new Link({
                content: 'Login',
                events: {
                    click: (e: Event) => {
                        e.preventDefault()
                        renderDOM('login')
                    }
                }
            }),
            SigninPage: new Link({
                content: 'Signin',
                events: {
                    click: (e: Event) => {
                        e.preventDefault()
                        renderDOM('signin')
                    }
                }
            }),
            MainPage: new Link({
                content: 'Main',
                events: {
                    click: (e: Event) => {
                        e.preventDefault()
                        renderDOM('main')
                    }
                }
            }),
            ProfilePage: new Link({
                content: 'Profile',
                events: {
                    click: (e: Event) => {
                        e.preventDefault()
                        renderDOM('profile')
                    }
                }
            }),
            ProfileDataPage: new Link({
                content: 'Profile Data',
                events: {
                    click: (e: Event) => {
                        e.preventDefault()
                        renderDOM('profileData')
                    }
                }
            }),
            ProfilePasswordPage: new Link({
                content: 'Profile Password',
                events: {
                    click: (e: Event) => {
                        e.preventDefault()
                        renderDOM('profilePassword')
                    }
                }
            })
        })
    }

    render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

export default Navigation
