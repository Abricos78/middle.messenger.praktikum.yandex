import Block from '../../../shared/common/Block'
import template from './SendMessage.hbs'
import './index.scss'
import Button from '../../../shared/ui/Button'
import ArrowRight from '../../../../static/icons/ArrowRight.svg'

class SendMessage extends Block {
    constructor() {
        super({
            Button: new Button({
                src: ArrowRight
            })
        })
    }

    render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

export default SendMessage
