import template from './ChangeAvatarModal.hbs'
import Button from '../../../../shared/ui/Button'
import DownloadInput from './DownloadInput'
import Block from '../../../../shared/common/Block'
import ChangeAvatarControllerInstance from '../controller'

class ChangeAvatarModal extends Block {
    constructor() {
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
