import Block from '../../../common/Block'
import ErrorMessage from '../../ErrorMessage'
import Input, { type InputProps } from '../Input'
import template from './InfoInput.hbs'

class InfoInput extends Block {
    constructor(props: InputProps) {
        const { label, name, type, placeholder, value, isNeedValue } = props
        const Error = new ErrorMessage()
        super({
            label,
            Input: new Input({
                class: 'infoField__value',
                name,
                type,
                placeholder,
                value,
                isNeedValue,
                ErrorMessage: Error
            }),
            ErrorMessage: Error
        })
    }

    render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

export default InfoInput
