import Block from '../../../../shared/common/Block'
import template from './DialogPopover.hbs'

class DialogPopover extends Block {
    render(): DocumentFragment {
        return this.compile(template, this.props)
    }

    show(): void {
        this.element.style.display = 'flex'
    }
}

export default DialogPopover
