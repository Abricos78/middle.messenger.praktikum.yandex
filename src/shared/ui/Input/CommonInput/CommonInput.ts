import Block from '../../../common/Block'
import ErrorMessage from '../../ErrorMessage'
import Input, { type InputProps } from '../Input'
import template from './CommonInput.hbs'

class CommonInput extends Block {
    constructor(props: InputProps) {
        const { label, name, placeholder, type, value, validationType, isNeedValue } = props
        const Error = new ErrorMessage()
        super({
            label,
            Input: new Input({
                class: 'input',
                name,
                placeholder,
                type,
                value,
                validationType,
                isNeedValue,
                ErrorMessage: Error,
            }),
            ErrorMessage: Error,
        })
    }

    render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

export default CommonInput
