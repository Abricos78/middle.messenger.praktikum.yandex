import template from './SendMessage.hbs'
import './index.scss'
import ArrowRight from '../../../../../static/icons/ArrowRight.svg'
import Button from '../../../../shared/ui/Button'
import MessageInput from './MessageInput'
import Block from '../../../../shared/common/Block'
import MessageControllerInstance from '../../../../shared/controller/MessageController'
import { withStore } from '../../../../shared/Store'

class SendMessage extends Block {
    constructor() {
        super({
            Input: new MessageInput(),
            Button: new Button({
                src: ArrowRight,
                type: 'submit',
                events: {
                    click: (e: Event) => { this.onSubmit(e) }
                }
            })
        })
    }

    onSubmit(e: Event): void {
        e.preventDefault()
        const message = (this.children.Input as MessageInput).getValue()
        const { id: chatId } = this.props

        MessageControllerInstance.sendMessage(chatId as number, message);

        (this.children.Input as MessageInput).clearValue()
    }

    render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

export default withStore(state => state.currentChat ?? {})(SendMessage)
