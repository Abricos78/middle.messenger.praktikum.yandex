import PrevLink from '../../entities/ui/PrevLink'
import ChangeAvatar from '../../features/ui/ChangeAvatar'
import Block from '../../shared/common/Block'
import controller from '../../shared/controller'
import Router from '../../shared/Router'
import { withStore } from '../../shared/Store'
import { type User } from '../../shared/types'
import { InfoField } from '../../shared/ui/InfoField'
import Link from '../../shared/ui/Link'
import template from './Profile.hbs'

class Profile extends Block {
    constructor(state: User) {
        const {
            email,
            login,
            first_name,
            second_name,
            phone,
            display_name,
            avatar,
        } = state
        super({
            PrevLink: new PrevLink(),
            ChangeAvatar: new ChangeAvatar(first_name, avatar),
            InfoFields: [
                new InfoField({
                    label: 'Почта',
                    value: email,
                }),
                new InfoField({
                    label: 'Логин',
                    value: login,
                }),
                new InfoField({
                    label: 'Имя',
                    value: first_name,
                }),
                new InfoField({
                    label: 'Фамилия',
                    value: second_name,
                }),
                new InfoField({
                    label: 'Имя в чате',
                    value: display_name,
                }),
                new InfoField({
                    label: 'Телефон',
                    value: phone,
                })
            ],
            ChangeData: new Link({
                content: 'Изменить данные',
                events: {
                    click: () => {
                        Router.go('/profileData')
                    }
                }
            }),
            ChangePassword: new Link({
                content: 'Изменить пароль',
                events: {
                    click: () => {
                        Router.go('/profilePassword')
                    }
                }
            }),
            Exit: new Link({
                content: 'Выйти',
                color: 'red',
                events: {
                    click: async () => {
                        await controller.logout()
                        Router.go('/auth')
                    }
                }
            })
        })
    }

    render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

export default withStore((state) => state.user ?? {})(Profile)
