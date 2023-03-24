import ProfilePasswordApi from '../api'
import { type ProfilePasswordType } from '../types'

class ProfilePasswordConstroller {
    #api: ProfilePasswordApi

    constructor() {
        this.#api = new ProfilePasswordApi()
    }

    async changePassword(data: ProfilePasswordType): Promise<void> {
        try {
            await this.#api.update(data)
        } catch (e) {
            console.error(e)
            if (e instanceof Error) throw new Error(e.message)
        }
    }
}

const ProfilePasswordControllerInstance = new ProfilePasswordConstroller()

export default ProfilePasswordControllerInstance
