import Block from '../../../shared/common/Block'
import template from './ChangeAvatarModal.hbs'
import Button from '../../../shared/ui/Button'

class ChangeAvatarModal extends Block {
    constructor() {
        super({
            Button: new Button({
                content: 'Поменять'
            }),
        })
    }

    render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

export default ChangeAvatarModal
