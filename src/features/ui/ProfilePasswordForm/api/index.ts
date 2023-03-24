import BaseApi from '../../../../shared/api/BaseApi'
import { type ProfilePasswordType } from '../types'

class ProfilePasswordApi extends BaseApi {
    constructor() {
        super('/user')
    }

    update(data: ProfilePasswordType): Promise<unknown> {
        return this.http.put('/password', data)
    }

    create = undefined
    read = undefined
    delete = undefined
}

export default ProfilePasswordApi
