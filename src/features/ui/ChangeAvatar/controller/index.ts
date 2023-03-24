import store from '../../../../shared/Store'
import ChangeAvatarApi from '../api'

class ChangeAvatarController {
    #api: ChangeAvatarApi

    constructor() {
        this.#api = new ChangeAvatarApi()
    }

    async changeAvatar(avatar: FormData): Promise<void> {
        try {
            const result = await this.#api.update(avatar)
            store.set('user', JSON.parse(result as string))
        } catch (e) {
            console.error(e)
            if (e instanceof Error) throw new Error(e.message)
        }
    }
}

const ChangeAvatarControllerInstance = new ChangeAvatarController()

export default ChangeAvatarControllerInstance
