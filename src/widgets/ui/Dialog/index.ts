import IncomeMessage from '../../../entities/ui/IncomeMessage'
import DialogHeader from '../../../features/ui/DialogHeader'
import SendMessage from '../../../features/ui/SendMessage'
import Block from '../../../shared/common/Block'
import template from './Dialog.hbs'
import './index.scss'

class Dialog extends Block {
    constructor() {
        super({
            DialogHeader: new DialogHeader(),
            SendMessage: new SendMessage(),
            IncomeMessage: new IncomeMessage(),
            IncomeMessage1: new IncomeMessage(),
            IncomeMessage2: new IncomeMessage(),
        })
    }

    render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

export default Dialog
