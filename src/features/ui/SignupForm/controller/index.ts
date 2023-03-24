
import controller from '../../../../shared/controller'
import AuthApi from '../api'
import { type ISignup } from '../types/authTypes'

class AuthController {
    api: AuthApi

    constructor () {
        this.api = new AuthApi()
    }

    async signup(data: ISignup): Promise<void> {
        try {
            await this.api.signup(data)
            await controller.getUserInfo()
        } catch (e) {
            if (e instanceof Error) throw new Error(e.message)
        }
    }
}

const AuthControllerInstance = new AuthController()

export default AuthControllerInstance
