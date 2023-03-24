import Block from '../../../../shared/common/Block'
import { withStore } from '../../../../shared/Store'
import Button from '../../../../shared/ui/Button'
import Modal from '../../../../shared/ui/Modal'
import CreateModal from '../../../../shared/ui/Modal/CreateModal'
import ChatListControllerInstance from '../controller'
import { type Chat } from '../types'
import ChatItem from './ChatItem'
import template from './ChatList.hbs'
import './index.scss'

class ChatList extends Block {
    constructor(state: Record<string, unknown>) {
        super({
            ChatsItem: [],
            Modal: new Modal({
                Content: new CreateModal({
                    title: 'Создать чат',
                    nameInput: 'title',
                    buttonText: 'Создать',
                    labelInput: 'Наименование чата',
                    closeModal: () => { (this.children.Modal as Block).hide() },
                    createController: (data: Record<string, unknown>) => { ChatListControllerInstance.createChat(data) }
                })
            }),
            Button: new Button({
                content: 'Создать новый чат',
                events: {
                    click: () => {
                        (this.children.Modal as Block).show()
                    }
                }
            }),
            chats: state.chats,
        })
        this.getChats()
    }

    componentDidUpdate(): boolean {
        const { chats } = this.props
        if ((chats as Chat[]).length) {
            this.children.ChatsItem = (this.props.chats as Chat[]).map(({ title, avatar, id, unread_count }) => {
                return new ChatItem({
                    title,
                    avatar,
                    id,
                    unread_count,
                })
            })
        }
        return true
    }

    getChats(): void {
        ChatListControllerInstance.getChats()
    }

    render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

export default withStore(state => state)(ChatList)
