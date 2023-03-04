import Block from '../../../shared/common/Block'
import template from './PrevLink.hbs'
import './index.scss'
import Button from '../../../shared/ui/Button'
import ArrowLeft from '../../../../static/icons/ArrowLeft.svg'

class PrevLink extends Block {
    constructor() {
        super({
            Button: new Button({
                src: ArrowLeft,
                events: {
                    click: () => {
                        console.log('Click PrevLink')
                    }
                }
            })
        })
    }

    render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

export default PrevLink
