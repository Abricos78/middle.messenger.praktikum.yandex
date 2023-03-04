import Block from '../../common/Block'
import template from './Modal.hbs'
import './index.scss'

interface ModalProps {
    Content: Block
    events?: Record<string, (e: Event) => void>
}

class Modal extends Block {
    constructor(props: ModalProps) {
        super({
            ...props,
            events: {
                click: (e: Event) => {
                    const node = e.target as HTMLElement
                    if (node.classList.contains('modal')) this.hide()
                }
            }
        })
    }

    render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

export default Modal
