import Avatar from '../../../../entities/ui/Avatar'
import Block from '../../../../shared/common/Block'
import template from './template.hbs'
import './index.scss'
import AvatarIcon from '/static/icons/Avatar.svg'
import ChangeAvatarModal from './ChangeAvatarModal'
import Modal from '../../../../shared/ui/Modal'
import { withStore } from '../../../../shared/Store'

interface ChangeAvatarProps {
    first_name: string
    avatar: string
}

class ChangeAvatar extends Block {
    constructor(props: ChangeAvatarProps) {
        const { first_name, avatar } = props
        super({
            title: first_name,
            Avatar: new Avatar({
                defaultSrc: AvatarIcon,
                avatarPath: avatar,
                events: {
                    click: () => {
                        (this.children.Modal as Block).show()
                    }
                }
            }),
            Modal: new Modal({
                Content: new ChangeAvatarModal({
                    closeModal: () => { (this.children.Modal as Block).hide() },
                }),
            })
        })
    }

    render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

export default withStore(state => state)(ChangeAvatar)
