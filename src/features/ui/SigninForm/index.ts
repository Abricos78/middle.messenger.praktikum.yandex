import Form from '../../../shared/common/Form'
import template from './SigninForm.hbs'
import './index.scss'
import Button from '../../../shared/ui/Button'
import Link from '../../../shared/ui/Link'
import { CommonInput } from '../../../shared/ui/Input'

class SigninForm extends Form {
    constructor() {
        const data = [
            {
                name: 'email',
                label: 'Почта',
                placeholder: 'Почта',
                type: 'email',
                validationType: 'EMAIL',
            },
            {
                name: 'login',
                label: 'Логин',
                placeholder: 'Логин',
                type: 'text',
                validationType: 'LOGIN',
            },
            {
                name: 'first_name',
                label: 'Имя',
                placeholder: 'Имя',
                type: 'text',
                validationType: 'NAME',
            },
            {
                name: 'second_name',
                label: 'Фамилия',
                placeholder: 'Фамилия',
                type: 'text',
                validationType: 'NAME',
            },
            {
                name: 'phone',
                label: 'Телефон',
                placeholder: 'Телефон',
                type: 'tel',
                validationType: 'PHONE',
            },
            {
                name: 'password',
                label: 'Пароль',
                placeholder: 'Пароль',
                type: 'password',
                validationType: 'PASSWORD',
            },
            {
                name: 'check_password',
                label: 'Пароль (ещё раз)',
                placeholder: 'Пароль',
                type: 'password',
                validationType: 'PASSWORD',
            },
        ]
        super({
            Inputs: data.map((input) => new CommonInput(input)),
            SignButton: new Button({
                content: 'Зарегистрироваться',
                type: 'submit',
            }),
            Link: new Link({
                content: 'Войти'
            }),
        })
    }

    render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

export default SigninForm
