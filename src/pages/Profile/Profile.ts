import PrevLink from '../../entities/ui/PrevLink'
import ChangeAvatar from '../../features/ui/ChangeAvatar'
import Block from '../../shared/common/Block'
import { InfoField } from '../../shared/ui/InfoField'
import Link from '../../shared/ui/Link'
import template from './Profile.hbs'

class Profile extends Block {
    constructor() {
        super({
            PrevLink: new PrevLink(),
            ChangeAvatar: new ChangeAvatar(),
            EmailInfo: new InfoField({
                label: 'Почта',
                value: 'pochta@yandex.ru',
            }),
            LoginInfo: new InfoField({
                label: 'Логин',
                value: 'ivanivanov',
            }),
            FirstNameInfo: new InfoField({
                label: 'Имя',
                value: 'Иван',
            }),
            SecondNameInfo: new InfoField({
                label: 'Фамилия',
                value: 'Иванов',
            }),
            NicknameInfo: new InfoField({
                label: 'Имя в чате',
                value: 'Иван',
            }),
            PhoneInfo: new InfoField({
                label: 'Телефон',
                value: '+7 (909) 967 30 30',
            }),
            ChangeData: new Link({
                content: 'Изменить данные'
            }),
            ChangePassword: new Link({
                content: 'Изменить пароль'
            }),
            Exit: new Link({
                content: 'Выйти',
                color: 'red'
            })
        })
    }

    render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

export default Profile
