import Block from '../../../shared/common/Block'
import Router from '../../../shared/Router'
import template from './ProfileLink.hbs'

class ProfileLink extends Block {
    constructor() {
        super({
            events: {
                click: (e: Event) => {
                    e.preventDefault()
                    Router.go('/profile')
                }
            }
        })
    }

    render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

export default ProfileLink
