import Block from '../../../common/Block'
import ErrorMessage from '../../ErrorMessage'
import Input, { type InputProps } from '../Input'
import template from './CommonInput.hbs'

class CommonInput extends Block {
    constructor(props: InputProps) {
        const { label, ...rest } = props
        const Error = new ErrorMessage()
        super({
            label,
            Input: new Input({
                class: 'input',
                ErrorMessage: Error,
                ...rest
            }),
            ErrorMessage: Error,
        })
    }

    render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

export default CommonInput
