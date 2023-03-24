import store from '../../../../shared/Store'
import { type User } from '../../../../shared/types'
import ProfileDataApi from '../api'
import { type ProfileDataType } from '../types'

class ProfileDataController {
    #api: ProfileDataApi

    constructor() {
        this.#api = new ProfileDataApi()
    }

    async changeProfile(data: ProfileDataType): Promise<void> {
        try {
            const user = await this.#api.update(data) as User
            store.set('user', JSON.parse(user as unknown as string))
        } catch (e) {
            console.error(e)
            if (e instanceof Error) throw new Error(e.message)
        }
    }
}

const ProfileDataControllerInstance = new ProfileDataController()

export default ProfileDataControllerInstance
