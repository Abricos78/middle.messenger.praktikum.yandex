import Block from '../../../../../shared/common/Block'
import template from './template.hbs'

class DownloadInput extends Block {
    render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

export default DownloadInput
