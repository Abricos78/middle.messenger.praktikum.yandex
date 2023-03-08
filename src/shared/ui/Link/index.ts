import Block from '../../common/Block'
import template from './Link.hbs'
import './index.scss'

interface LinkProps {
    content: string
    color?: string
    events?: Record<string, (e: Event) => void>
}

class Link extends Block {
    constructor(props: LinkProps) {
        super({
            ...props
        })
    }

    render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

export default Link
