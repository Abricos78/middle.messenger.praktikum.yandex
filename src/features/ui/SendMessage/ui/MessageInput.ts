import Block from '../../../../shared/common/Block'
import template from './MessageInput.hbs'

class MessageInput extends Block {
    render(): DocumentFragment {
        return this.compile(template, this.props)
    }

    getValue(): string {
        return (this.element as HTMLInputElement).value
    }

    clearValue(): void {
        (this.element as HTMLInputElement).value = ''
    }
}

export default MessageInput
