import Block from '../../../shared/common/Block'
import template from './Avatar.hbs'
import './index.scss'

interface AvatarProps {
    src?: string
    events?: Record<string, (e: Event) => void>
}

class Avatar extends Block {
    constructor(props: AvatarProps = {}) {
        super(props)
    }

    render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

export default Avatar
