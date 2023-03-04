import Block from '../../../shared/common/Block'
import template from './SearchChat.hbs'
import './index.scss'

class SearchChat extends Block {
    render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

export default SearchChat
