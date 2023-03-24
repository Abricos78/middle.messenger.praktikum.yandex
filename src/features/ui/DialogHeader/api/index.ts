import BaseApi from '../../../../shared/api/BaseApi'
import { type SearchUserData } from '../types'

class DialogFeaturesApi extends BaseApi {
    searchUser(data: SearchUserData): Promise<unknown> {
        return this.http.post('/user/search', data)
    }

    addUserInChat(data: Record<string, unknown>): Promise<unknown> {
        return this.http.put('/chats/users', data)
    }

    removeUserFromChat(data: Record<string, unknown>): Promise<unknown> {
        return this.http.delete('/chats/users', data)
    }

    create = undefined
    read = undefined
    update = undefined
    delete = undefined
}

export default DialogFeaturesApi
