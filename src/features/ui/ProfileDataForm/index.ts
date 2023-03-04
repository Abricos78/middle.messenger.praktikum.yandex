import Form from '../../../shared/common/Form'
import template from './ProfileDataForm.hbs'
import './index.scss'
import Button from '../../../shared/ui/Button'
import { InfoInput } from '../../../shared/ui/Input'

class ProfileDataForm extends Form {
    constructor() {
        const data = [
            {
                name: 'email',
                label: 'Почта',
                value: 'pochta@yandex.ru',
                type: 'email',
                validationType: 'EMAIL',
            },
            {
                name: 'login',
                label: 'Логин',
                value: 'ivanivanov',
                type: 'text',
                validationType: 'LOGIN',
            },
            {
                name: 'first_name',
                label: 'Имя',
                value: 'Иван',
                type: 'text',
                validationType: 'NAME',
            },
            {
                name: 'second_name',
                label: 'Фамилия',
                value: 'Иванов',
                type: 'text',
                validationType: 'NAME',
            },
            {
                name: 'display_name',
                label: 'Имя в чате',
                value: 'Иван',
                type: 'text',
            },
            {
                name: 'phone',
                label: 'Телефон',
                value: '+7 (909) 967 30 30',
                type: 'tel',
                validationType: 'PHONE',
            },
        ]
        super({
            Inputs: data.map((input) => new InfoInput(input)),
            SaveButton: new Button({
                content: 'Сохранить',
                type: 'submit',
            }),
        })
    }

    render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

export default ProfileDataForm
