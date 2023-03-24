import Block from '../../../../shared/common/Block'
import Button from '../../../../shared/ui/Button'
import Avatar from '../../Avatar'
import ChatListControllerInstance from '../controller'
import template from './ChatItem.hbs'

type ChatItemData = {
    title: string
    avatar: string | null
    id: number
    unread_count: number
}

class ChatItem extends Block {
    constructor(props: ChatItemData) {
        const { title, avatar, id, unread_count } = props
        super({
            Avatar: new Avatar({
                avatarPath: avatar
            }),
            Notification: unread_count
                ? new Button({
                    content: unread_count,
                    buttonType: 'round',
                })
                : null,
            title,
            events: {
                click: () => { ChatListControllerInstance.setCurrentChat(id, title) }
            }
        })
    }

    render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

export default ChatItem
