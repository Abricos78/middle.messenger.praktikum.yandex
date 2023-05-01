import Block from '../../common/Block'
import { validation } from '../../utils'
import template from './Input.hbs'

export interface InputProps {
    name: string
    placeholder?: string
    type?: string
    label?: string
    value?: string | number
    validationType?: string
    isNeedValue?: boolean
}

interface Props extends InputProps {
    class?: string
    ErrorMessage: Block
}

class Input extends Block {
    error: boolean

    constructor(props: Props) {
        super({
            ...props,
            events: {
                focusout: () => {
                    this.validation()
                },
            }
        })
    }

    validation(): string | null {
        const message = validation((this.element as HTMLInputElement).value, this.props.validationType as undefined)
        const ErrorMessage = this.children.ErrorMessage as Block
        if (message) {
            ErrorMessage.setProps({
                text: message
            })
            ErrorMessage.show()
            this.error = true
        } else {
            ErrorMessage.hide()
            this.error = false
        }
        return message
    }

    render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

export default Input
