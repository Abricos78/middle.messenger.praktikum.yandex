import Block from '../../../shared/common/Block'
import template from './IncomeMessage.hbs'
import './index.scss'

class IncomeMessage extends Block {
    render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

export default IncomeMessage
