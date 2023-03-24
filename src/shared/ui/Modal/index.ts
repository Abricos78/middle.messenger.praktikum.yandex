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
                },
                ...props.events
            }
        })
    }

    render(): DocumentFragment {
        return this.compile(template, this.props)
    }

    show(): void {
        this.element.style.display = 'flex'
    }
}

export default Modal
