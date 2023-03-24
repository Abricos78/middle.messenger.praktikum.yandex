import MessageControllerInstance from '../../../../shared/controller/MessageController'
import store from '../../../../shared/Store'
import ChatListApi from '../api'
import { type Chat } from '../types'

class ChatListController {
    #api: ChatListApi

    constructor() {
        this.#api = new ChatListApi()
    }

    async getChats(): Promise<void> {
        try {
            const chats = JSON.parse(await this.#api.getChats() as string)
            store.set('chats', chats);
            (chats as Chat[]).forEach(async ({ id }: Chat) => {
                const response = JSON.parse(await this.#api.getToken(id) as string)
                MessageControllerInstance.connect(id, (response as Record<string, string>).token)
            })
        } catch (e) {
            console.error(e)
            if (e instanceof Error) throw new Error(e.message)
        }
    }

    setCurrentChat(id: number, title: string): void {
        store.set('currentChat', { id, title })
    }

    async createChat(data: Record<string, unknown>): Promise<void> {
        console.log('createChat', data)
        try {
            await this.#api.create(data)
            await this.getChats()
        } catch (e) {
            console.error(e)
            if (e instanceof Error) throw new Error(e.message)
        }
    }
}

const ChatListControllerInstance = new ChatListController()

export default ChatListControllerInstance
