import Form from '../../../../shared/common/Form'
import template from './ProfilePasswordForm.hbs'
import './index.scss'
import Button from '../../../../shared/ui/Button'
import { InfoInput } from '../../../../shared/ui/Input'
import ProfilePasswordControllerInstance from '../controller'
import { type ProfilePasswordType } from '../types'

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
                isNeedValue: false,
            },
        ]
        super({
            Inputs: data.map((input) => new InfoInput(input)),
            SaveButton: new Button({
                content: 'Сохранить',
                type: 'submit',
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
            const { data, hasError } = this.getFormData<ProfilePasswordType>()
            if (hasError) return
            await ProfilePasswordControllerInstance.changePassword(data)
        } catch (e) {
            console.error(e)
            if (e instanceof Error) throw new Error(e.message)
        }
    }

    render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

export default ProfilePasswordForm
