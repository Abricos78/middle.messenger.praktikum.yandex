import Avatar from '../../../entities/ui/Avatar'
import Block from '../../../shared/common/Block'
import template from './ChangeAvatar.hbs'
import './index.scss'
import AvatarIcon from '../../../../static/icons/Avatar.svg'
import ChangeAvatarModal from './ChangeAvatarModal'
import Modal from '../../../shared/ui/Modal'

class ChangeAvatar extends Block {
    constructor() {
        super({
            title: 'Иван',
            Avatar: new Avatar({
                src: AvatarIcon,
                events: {
                    click: () => {
                        (this.children.Modal as Block).show('flex')
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
