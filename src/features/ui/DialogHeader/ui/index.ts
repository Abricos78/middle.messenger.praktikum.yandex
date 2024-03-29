import Avatar from '../../../../entities/ui/Avatar'
import Block from '../../../../shared/common/Block'
import { withStore } from '../../../../shared/Store'
import DialogFeatures from './DialogFeatures'
import template from './template.hbs'
import './index.scss'

class DialogHeader extends Block {
    constructor() {
        super({
            Avatar: new Avatar(),
            DialogFeaturesTemplate: new DialogFeatures(),
        })
    }

    render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

export default withStore(state => state.currentChat ?? {})(DialogHeader)
