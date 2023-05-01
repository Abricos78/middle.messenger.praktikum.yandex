import Form from '../../../../shared/common/Form'
import template from './ProfileDataForm.hbs'
import './index.scss'
import Button from '../../../../shared/ui/Button'
import { InfoInput } from '../../../../shared/ui/Input'
import { type User } from '../../../../shared/types'
import ProfileDataControllerInstance from '../controller'
import { type ProfileDataType } from '../types'

class ProfileDataForm extends Form {
    constructor(userData: User) {
        const data = [
            {
                name: 'email',
                label: 'Почта',
                type: 'email',
                validationType: 'EMAIL',
            },
            {
                name: 'login',
                label: 'Логин',
                type: 'text',
                validationType: 'LOGIN',
            },
            {
                name: 'first_name',
                label: 'Имя',
                type: 'text',
                validationType: 'NAME',
            },
            {
                name: 'second_name',
                label: 'Фамилия',
                type: 'text',
                validationType: 'NAME',
            },
            {
                name: 'display_name',
                label: 'Имя в чате',
                type: 'text',
            },
            {
                name: 'phone',
                label: 'Телефон',
                type: 'tel',
                validationType: 'PHONE',
            },
        ]
        super({
            Inputs: data.map((input) => new InfoInput({ ...input, value: userData[input.name as keyof User] })),
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
            const { data, hasError } = this.getFormData<ProfileDataType>()
            console.log(data, hasError)
            if (hasError) return
            await ProfileDataControllerInstance.changeProfile(data)
        } catch (e) {
            console.error(e)
            if (e instanceof Error) throw new Error(e.message)
        }
    }

    render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

export default ProfileDataForm
