import Form from '../../../shared/common/Form'
import template from './LoginForm.hbs'
import './index.scss'
import Button from '../../../shared/ui/Button'
import Link from '../../../shared/ui/Link'
import { CommonInput } from '../../../shared/ui/Input'

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
                content: 'Нет аккаунта?'
            }),
        })
    }

    render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

export default LoginForm
