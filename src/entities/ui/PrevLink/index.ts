import Block from '../../../shared/common/Block'
import template from './PrevLink.hbs'
import './index.scss'
import Button from '../../../shared/ui/Button'
import ArrowLeft from '../../../../static/icons/ArrowLeft.svg'
import Router from '../../../shared/Router'

class PrevLink extends Block {
    constructor() {
        super({
            Button: new Button({
                src: ArrowLeft,
                events: {
                    click: () => {
                        Router.back()
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
