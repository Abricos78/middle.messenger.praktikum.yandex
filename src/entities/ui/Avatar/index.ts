import { withStore } from '../../../shared/Store'
import Block from '../../../shared/common/Block'
import template from './Avatar.hbs'
import './index.scss'

interface AvatarProps {
    defaultSrc?: string
    avatarPath?: string | null
    events?: Record<string, (e: Event) => void>
}

interface User {
    avatar?: string | null
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

    componentDidUpdate(): boolean {
        const { user } = this.props
        if (this.props.avatarPath !== (user as User).avatar) {
            this.setProps({
                avatarPath: (user as User).avatar,
                src: `https://ya-praktikum.tech/api/v2/resources${(user as User).avatar}`,
            })
            return true
        }
        return false
    }

    render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

export default withStore(state => state)(Avatar)
