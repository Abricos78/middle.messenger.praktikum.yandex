import type Input from '../ui/Input/Input'
import Block from './Block'

interface FormData<Data> {
    data: Data
    hasError: boolean
}

abstract class Form extends Block {
    constructor(props: Record<string, unknown>) {
        super(props)
    }

    getFormData<Data>(): FormData<Data> {
        let hasError = false

        const data: Record<string, string | number | boolean> = {};

        (this.children.Inputs as Block[]).forEach(({ children }) => {
            const Input = children.Input as Input
            const {
                props: {
                    name,
                    isNeedValue,
                }
            } = Input
            if (isNeedValue === false) return
            data[name as string] = (Input.element as HTMLInputElement).value
            if (Input.error === undefined) Input.validation()
            if (Input.error) hasError = true
        })

        return { data: data as Data, hasError }
    }
}

export default Form
