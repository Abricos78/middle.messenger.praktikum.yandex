import WSocket, { WSTransportEvents } from '../api/WebSocket'
import store from '../Store'
import { type Message } from '../types'

class MessageController {
    #sockets = new Map<number, WSocket>()

    async connect(chatId: number, token: string): Promise<void> {
        if (this.#sockets.has(chatId)) {
            return
        }

        const userId = store.getState().user?.id

        const webSocket = new WSocket(`wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${token}`)

        this.#sockets.set(chatId, webSocket)

        await webSocket.connect()

        this.#subscribe(webSocket, chatId)
        this.fetchOldMessages(chatId)
    }

    sendMessage(chatId: number, message: string): void {
        const socket = this.#sockets.get(chatId)

        if (!socket) {
            throw new Error(`Chat ${chatId} is not connected`)
        }

        if (message.trim() === '') return

        socket.send({
            type: 'message',
            content: message,
        })
    }

    fetchOldMessages(chatId: number): void {
        const socket = this.#sockets.get(chatId)

        if (!socket) {
            throw new Error(`Chat ${chatId} is not connected`)
        }

        socket.send({ type: 'get old', content: '0' })
    }

    closeAll(): void {
        Array.from(this.#sockets.values()).forEach(socket => socket.close())
    }

    #onMessage(id: number, messages: Message | Message[]): void {
        let messagesToAdd: unknown[] = []

        if (Array.isArray(messages)) {
            messagesToAdd = messages.reverse()
        } else {
            messagesToAdd.push(messages)
        }

        const currentMessages = store.getState().messages?.[id] ?? []

        messagesToAdd = [...currentMessages, ...messagesToAdd]

        store.set(`messages.${id}`, messagesToAdd)
    }

    #onClose(id: number): void {
        this.#sockets.delete(id)
    }

    #subscribe(webSocket: WSocket, chatId: number): void {
        webSocket.on(WSTransportEvents.Message, (message) => this.#onMessage(chatId, message as Message))
        webSocket.on(WSTransportEvents.Close, () => this.#onClose(chatId))
    }
}

const MessageControllerInstance = new MessageController()

export default MessageControllerInstance
