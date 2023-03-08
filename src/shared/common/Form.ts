import type Input from '../ui/Input/Input'
import Block from './Block'

abstract class Form extends Block {
    constructor(props: Record<string, unknown>) {
        super({
            ...props,
            events: {
                submit: (e: SubmitEvent) => {
                    e.preventDefault()
                    this.submit()
                }
            }
        })
    }

    submit(): void {
        let hasError = false

        const data: Record<string, string> = {};

        (this.children.Inputs as Block[]).forEach(({ children }) => {
            const Input = children.Input as Input
            const {
                props: {
                    name,
                }
            } = Input
            data[name as string] = (Input.element as HTMLInputElement).value
            if (Input.error === undefined) Input.validation()
            if (Input.error) hasError = true
        })

        console.log({ data, hasError })
    }
}

export default Form
