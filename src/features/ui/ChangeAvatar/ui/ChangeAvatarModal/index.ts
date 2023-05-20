import template from './template.hbs'
import Button from '../../../../../shared/ui/Button'
import DownloadInput from '../DownloadInput'
import Block from '../../../../../shared/common/Block'
import ChangeAvatarControllerInstance from '../../controller'

interface ChangeAvatarModalProps {
    closeModal: () => void
}

class ChangeAvatarModal extends Block {
    constructor({ closeModal }: ChangeAvatarModalProps) {
        super({
            DownloadInput: new DownloadInput(),
            Button: new Button({
                content: 'Поменять',
                type: 'submit'
            }),
            events: {
                submit: (e: Event) => {
                    e.preventDefault()
                    this.onSubmit()
                    closeModal()
                }
            }
        })
    }

    async onSubmit(): Promise<void> {
        const formData = new FormData(this.element as HTMLFormElement)
        await ChangeAvatarControllerInstance.changeAvatar(formData)
    }

    render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

export default ChangeAvatarModal
