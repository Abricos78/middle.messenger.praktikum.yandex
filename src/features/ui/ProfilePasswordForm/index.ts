import Form from '../../../shared/common/Form'
import template from './ProfilePasswordForm.hbs'
import './index.scss'
import Button from '../../../shared/ui/Button'
import { InfoInput } from '../../../shared/ui/Input'

class ProfilePasswordForm extends Form {
    constructor() {
        const data = [
            {
                name: 'oldPassword',
                label: 'Старый пароль',
                placeholder: 'Старый пароль',
                type: 'password',
                validationType: 'PASSWORD',
            },
            {
                name: 'newPassword',
                label: 'Новый пароль',
                placeholder: 'Новый пароль',
                type: 'password',
                validationType: 'PASSWORD',
            },
            {
                name: 'repeatNewPassword',
                label: 'Повторите новый пароль',
                placeholder: 'Повторите новый пароль',
                type: 'password',
                validationType: 'PASSWORD',
            },
        ]
        super({
            Inputs: data.map((input) => new InfoInput(input)),
            SaveButton: new Button({
                content: 'Сохранить',
                type: 'submit',
            })
        })
    }

    render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

export default ProfilePasswordForm
