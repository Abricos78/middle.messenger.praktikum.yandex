import Block from '../../../shared/common/Block'
import template from './template.hbs'
import './index.scss'
import ProfileLink from './ProfileLink'

class SearchChat extends Block {
    constructor() {
        super({
            Link: new ProfileLink()
        })
    }

    render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

export default SearchChat
