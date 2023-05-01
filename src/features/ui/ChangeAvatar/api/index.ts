import BaseApi from '../../../../shared/api/BaseApi'

class ChangeAvatarApi extends BaseApi {
    constructor() {
        super('/user')
    }

    update(data: FormData): Promise<unknown> {
        return this.http.put('/profile/avatar', data)
    }

    create = undefined
    read = undefined
    delete = undefined
}

export default ChangeAvatarApi
