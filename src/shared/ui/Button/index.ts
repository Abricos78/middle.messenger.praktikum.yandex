import Block from '../../common/Block'
import template from './Button.hbs'
import './index.scss'

interface ButtonProps {
    content?: string
    events?: Record<string, () => void>
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
