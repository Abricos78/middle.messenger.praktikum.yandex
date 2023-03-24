import Block from '../../../../shared/common/Block'
import template from './DownloadInput.hbs'

class DownloadInput extends Block {
    render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

export default DownloadInput
