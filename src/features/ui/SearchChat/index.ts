import Block from '../../../shared/common/Block'
import template from './SearchChat.hbs'
import './index.scss'
import ProfileLink from './ProfileLink'

class SearchChat extends Block {
    constructor() {
        super({
            ProfileLink: new ProfileLink()
        })
    }

    render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

export default SearchChat
