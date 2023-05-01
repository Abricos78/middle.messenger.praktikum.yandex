import Block from '../../common/Block'
import template from './Button.hbs'
import './index.scss'

interface ButtonProps {
    content?: string | number
    events?: Record<string, (e: Event) => void>
    type?: string
    buttonType?: string
    src?: string
}

class Button extends Block {
    constructor(props: ButtonProps) {
        super(props)
    }

    render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

export default Button
