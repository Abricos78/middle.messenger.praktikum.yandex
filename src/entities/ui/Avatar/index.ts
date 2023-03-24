import Block from '../../../shared/common/Block'
import template from './Avatar.hbs'
import './index.scss'

interface AvatarProps {
    defaultSrc?: string
    avatarPath?: string | null
    events?: Record<string, (e: Event) => void>
}

class Avatar extends Block {
    avatarPath?: string

    constructor(props: AvatarProps = {}) {
        const {
            defaultSrc,
            avatarPath,
        } = props

        super({
            ...props,
            src: avatarPath ? `https://ya-praktikum.tech/api/v2/resources${avatarPath}` : defaultSrc
        })
    }

    render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

export default Avatar
