import BaseApi from '../../../../shared/api/BaseApi'
import { type ISignup } from '../types/authTypes'

class AuthApi extends BaseApi {
    constructor() {
        super('/auth')
    }

    signup(data: ISignup): Promise<unknown> {
        return this.http.post('/signup', data)
    }

    create = undefined
    read = undefined
    update = undefined
    delete = undefined
}

export default AuthApi
