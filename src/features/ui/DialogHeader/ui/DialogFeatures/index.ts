import Block from '../../../../../shared/common/Block'
import { type State, withStore } from '../../../../../shared/Store'
import Modal from '../../../../../shared/ui/Modal'
import CreateModal from '../../../../../shared/ui/Modal/CreateModal'
import DialogFeaturesControllerInstance from '../../controller'
import { type SearchUserData } from '../../types'
import template from './template.hbs'
import DialogPopover from '../DialogPopover'

class DialogFeatures extends Block {
    #cb: (e: Event) => void

    constructor(state: State) {
        super({
            DialogPopover: new DialogPopover(),
            events: {
                click: () => { this.addActive() }
            },
            currentChat: state.currentChat?.id,
            AddUserModal: new Modal({
                Content: new CreateModal({
                    title: 'Добавить пользователя',
                    labelInput: 'Логин',
                    nameInput: 'login',
                    buttonText: 'Добавить',
                    closeModal: () => { (this.children.AddUserModal as Block).hide() },
                    createController: (data: Record<string, unknown>) => { DialogFeaturesControllerInstance.addUserInChat(data as SearchUserData) }
                })
            }),
            RemoveUserModal: new Modal({
                Content: new CreateModal({
                    title: 'Удалить пользователя',
                    labelInput: 'Логин',
                    nameInput: 'login',
                    buttonText: 'Удалить',
                    closeModal: () => { (this.children.RemoveUserModal as Block).hide() },
                    createController: (data: Record<string, unknown>) => { DialogFeaturesControllerInstance.removeUserFromChat(data as SearchUserData) }
                })
            })
        })
        this.#cb = this.removeActive.bind(this)
    }

    showPopover(): void {
        (this.children.DialogPopover as Block).show()
        this.element.firstElementChild!.classList.toggle('active', true)
    }

    hidePopover(): void {
        (this.children.DialogPopover as Block).hide()
        this.element.firstElementChild!.classList.toggle('active', false)
    }

    addUserModal(): void {
        (this.children.AddUserModal as Block).show()
    }

    removeUserModal(): void {
        (this.children.RemoveUserModal as Block).show()
    }

    removeActive(e: Event): void {
        const target = e.target as HTMLElement

        switch (target.dataset.type) {
            case 'add':
                this.addUserModal()
                break
            case 'remove':
                this.removeUserModal()
                break
            case 'removeChat':
                DialogFeaturesControllerInstance.removeChat()
        }

        if (!target.classList.contains('dialogHeader__features')) {
            this.hidePopover()
            document.removeEventListener('click', this.#cb)
        }
    }

    addActive(): void {
        this.showPopover()
        document.addEventListener('click', this.#cb)
    }

    render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

export default withStore(state => state)(DialogFeatures)
