import IncomeMessage from '../../../entities/ui/IncomeMessage'
import DialogHeader from '../../../features/ui/DialogHeader'
import SendMessage from '../../../features/ui/SendMessage'
import Block from '../../../shared/common/Block'
import { withStore } from '../../../shared/Store'
import { type Message } from '../../../shared/types'
import template from './Dialog.hbs'
import './index.scss'

class Dialog extends Block {
    constructor() {
        super({
            DialogHeader: new DialogHeader(),
            SendMessage: new SendMessage(),
            Messages: null,
        })
    }

    componentDidMount(): void {
        console.log('componentDidMount', this)
    }

    componentDidUpdate(): boolean {
        const { currentChat = { id: null }, messages = {} } = this.props
        const chatId = (currentChat as Record<string, number>).id
        const currentMessages = (messages as Record<number, Message[]>)[chatId] || []
        if (!chatId || !currentMessages.length) {
            this.children.Messages = []
            return true
        }
        if (this.props.Messages === null) {
            this.children.Messages = currentMessages.map(({ content }) => new IncomeMessage(content))
        } else {
            const lastMessage = currentMessages.at(-1);
            (this.children.Messages as IncomeMessage[]).push(new IncomeMessage((lastMessage as Message).content))
        }
        return true
    }

    render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

export default withStore(state => state)(Dialog)
