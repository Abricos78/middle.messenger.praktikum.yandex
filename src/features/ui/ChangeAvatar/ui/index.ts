import Avatar from '../../../../entities/ui/Avatar'
import Block from '../../../../shared/common/Block'
import template from './ChangeAvatar.hbs'
import './index.scss'
import AvatarIcon from '../../../../../static/icons/Avatar.svg'
import ChangeAvatarModal from './ChangeAvatarModal'
import Modal from '../../../../shared/ui/Modal'

class ChangeAvatar extends Block {
    constructor(first_name: string, avatarPath: string) {
        super({
            title: first_name,
            Avatar: new Avatar({
                defaultSrc: AvatarIcon,
                avatarPath,
                events: {
                    click: () => {
                        (this.children.Modal as Block).show()
                    }
                }
            }),
            Modal: new Modal({
                Content: new ChangeAvatarModal()
            })
        })
    }

    render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

export default ChangeAvatar
