import Block from '../../shared/common/Block'
import template from './Main.hbs'
import './index.scss'
import Chats from '../../widgets/ui/Chats'
import Dialog from '../../widgets/ui/Dialog'

class Main extends Block {
    constructor() {
        super({
            Chats: new Chats(),
            Dialog: new Dialog(),
        })
    }

    show(): void {
        this.element.style.display = 'flex'
    }

    render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

export default Main
