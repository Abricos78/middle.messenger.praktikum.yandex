import BaseApi from '../../../../shared/api/BaseApi'
import { type ProfileDataType } from '../types'

class ProfileDataApi extends BaseApi {
    constructor() {
        super('/user')
    }

    update(data: ProfileDataType): Promise<unknown> {
        return this.http.put('/profile', data)
    }

    create = undefined
    read = undefined
    delete = undefined
}

export default ProfileDataApi
