import BaseApi from '../../../../shared/api/BaseApi'

class ChatListApi extends BaseApi {
    constructor() {
        super('/chats')
    }

    getChats(): Promise<unknown> {
        return this.http.get()
    }

    create(data: Record<string, unknown>): Promise<unknown> {
        return this.http.post('', data)
    }

    getToken(chatId: number): Promise<unknown> {
        return this.http.post(`/token/${chatId}`)
    }

    read = undefined
    update = undefined
    delete = undefined
}

export default ChatListApi
