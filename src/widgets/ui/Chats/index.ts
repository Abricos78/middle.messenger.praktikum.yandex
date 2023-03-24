import ChatList from '../../../entities/ui/ChatList'
import SearchChat from '../../../features/ui/SearchChat'
import Block from '../../../shared/common/Block'
import template from './Chats.hbs'
import './index.scss'

class Chats extends Block {
    constructor() {
        super({
            SearchChat: new SearchChat(),
            ChatList: new ChatList(),
        })
    }

    render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

export default Chats
