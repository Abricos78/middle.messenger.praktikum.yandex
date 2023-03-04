import Avatar from '../../../entities/ui/Avatar'
import Block from '../../../shared/common/Block'
import template from './DialogHeader.hbs'
import './index.scss'

class DialogHeader extends Block {
    constructor() {
        super({
            Avatar: new Avatar()
        })
    }

    render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

export default DialogHeader
