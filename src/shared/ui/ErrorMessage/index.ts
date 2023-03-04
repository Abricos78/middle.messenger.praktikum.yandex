import Block from '../../common/Block'
import template from './ErrorMessage.hbs'
import './index.scss'

interface ErrorMessageProps {
    text?: string
    size?: string
}

class ErrorMessage extends Block {
    constructor(props?: ErrorMessageProps) {
        super(props)
    }

    render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

export default ErrorMessage
