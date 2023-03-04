import Block from '../../common/Block'
import template from './InfoField.hbs'

interface InfoFieldProps {
    label: string
    value: string
}

class InfoField extends Block {
    constructor(props: InfoFieldProps) {
        super(props)
    }

    render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

export default InfoField
