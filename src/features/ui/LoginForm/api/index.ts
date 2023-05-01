import BaseApi from '../../../../shared/api/BaseApi'
import { type LoginData } from '../types'

class LoginApi extends BaseApi {
    constructor() {
        super('/auth')
    }

    login(data: LoginData): Promise<unknown> {
        return this.http.post('/signin', data)
    }

    create = undefined
    read = undefined
    update = undefined
    delete = undefined
}

export default LoginApi
