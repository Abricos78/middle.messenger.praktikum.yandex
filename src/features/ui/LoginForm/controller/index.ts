import controller from '../../../../shared/controller'
import LoginApi from '../api'
import { type LoginData } from '../types'

class LoginController {
    #api: LoginApi
    constructor() {
        this.#api = new LoginApi()
    }

    async login(data: LoginData): Promise<void> {
        try {
            await this.#api.login(data)
            await controller.getUserInfo()
        } catch (e) {
            if (e instanceof Error) throw new Error(e.message)
        }
    }
}

const LoginControllerInstance = new LoginController()

export default LoginControllerInstance
