import Block from '../../../shared/common/Block'
import ChatItem from './ChatItem'
import template from './ChatList.hbs'
import './index.scss'

class ChatList extends Block {
    constructor() {
        super({
            ChatItem: new ChatItem()
        })
    }

    render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

export default ChatList
