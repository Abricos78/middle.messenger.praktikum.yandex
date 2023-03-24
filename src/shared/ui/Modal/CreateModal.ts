import Form from '../../common/Form'
import Button from '../Button'
import { CommonInput } from '../Input'
import template from './CreateModal.hbs'

type CreateModalProps = {
    title: string
    nameInput: string
    buttonText: string
    labelInput: string
    closeModal: () => void
    createController: (data: Record<string, unknown>) => void
}

class CreateModal extends Form {
    #closeModal: () => void
    #createController: (data: Record<string, unknown>) => void
    constructor({ title, nameInput, labelInput, buttonText, closeModal, createController }: CreateModalProps) {
        super({
            title,
            Inputs: [
                new CommonInput({
                    name: nameInput,
                    label: labelInput,
                })
            ],
            Button: new Button({
                content: buttonText,
                type: 'submit'
            }),
            events: {
                submit: (e: Event) => {
                    e.preventDefault()
                    this.onSubmit()
                }
            }
        })
        this.#closeModal = closeModal
        this.#createController = createController
    }

    async onSubmit(): Promise<void> {
        const { data, hasError } = this.getFormData<Record<string, unknown>>()
        if (hasError) return
        await this.#createController(data)
        this.#closeModal()
    }

    render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

export default CreateModal
