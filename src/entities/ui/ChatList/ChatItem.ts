import Block from '../../../shared/common/Block'
import Button from '../../../shared/ui/Button'
import Avatar from '../Avatar'
import template from './ChatItem.hbs'

class ChatItem extends Block {
    constructor() {
        super({
            Avatar: new Avatar(),
            Notification: new Button({
                content: '2',
                buttonType: 'round',
            })
        })
    }

    render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

export default ChatItem
