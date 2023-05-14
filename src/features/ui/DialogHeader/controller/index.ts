import store from '../../../../shared/Store'
import DialogFeaturesApi from '../api'
import { type SearchUserData } from '../types'

type FormatDataType = {
    users: number[]
    chatId: number
}

class DialogFeaturesController {
    #api: DialogFeaturesApi

    constructor() {
        this.#api = new DialogFeaturesApi()
    }

    async #formatData(data: SearchUserData): Promise<FormatDataType> {
        const { currentChat } = store.getState()
        const { id } = JSON.parse(await this.#api.searchUser(data) as string)[0]
        return {
            users: [id],
            chatId: currentChat!.id
        }
    }

    async addUserInChat(data: SearchUserData): Promise<void> {
        await this.#api.addUserInChat(await this.#formatData(data))
    }

    async removeUserFromChat(data: SearchUserData): Promise<void> {
        await this.#api.removeUserFromChat(await this.#formatData(data))
    }

    async removeChat(): Promise<void> {
        const {
            currentChat: { id } = { id: null },
            chats
        } = store.getState()
        if (!id) return
        await this.#api.removeChat({ chatId: id })
        store.set('currentChat', undefined)
        store.set('chats', chats?.filter(({ id: chatId }) => chatId !== id))
    }
}

const DialogFeaturesControllerInstance = new DialogFeaturesController()

export default DialogFeaturesControllerInstance
