import Form from '../../../../shared/common/Form'
import template from './LoginForm.hbs'
import './index.scss'
import Button from '../../../../shared/ui/Button'
import Link from '../../../../shared/ui/Link'
import { CommonInput } from '../../../../shared/ui/Input'
import Router from '../../../../shared/Router'
import LoginControllerInstance from '../controller'
import { type LoginData } from '../types'

class LoginForm extends Form {
    constructor() {
        const data = [
            {
                name: 'login',
                label: 'Логин',
                placeholder: 'Логин',
                type: 'text',
                validationType: 'LOGIN'
            },
            {
                name: 'password',
                label: 'Пароль',
                placeholder: 'Пароль',
                type: 'password',
                validationType: 'PASSWORD'
            },
        ]
        super({
            Inputs: data.map((input) => new CommonInput(input)),
            AuthButton: new Button({
                content: 'Авторизоваться',
                type: 'submit',
            }),
            Link: new Link({
                content: 'Нет аккаунта?',
                events: {
                    click: () => { Router.go('/signup') }
                }
            }),
            events: {
                submit: (e: Event) => {
                    e.preventDefault()
                    this.onSubmit()
                }
            }
        })
    }

    async onSubmit(): Promise<void> {
        try {
            const { data, hasError } = this.getFormData<LoginData>()
            if (hasError) return
            await LoginControllerInstance.login(data)
            Router.go('/')
        } catch (e) {
            if (e instanceof Error) throw new Error(e.message)
        }
    }

    render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

export default LoginForm
