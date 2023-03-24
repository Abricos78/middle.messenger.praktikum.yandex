
import CommonApi from '../api/CommonApi'
import store from '../Store'

class CommonController {
    commonApi: CommonApi
    constructor() {
        this.commonApi = new CommonApi()
    }

    async getUserInfo(): Promise<void> {
        try {
            const result = await this.commonApi.getUserInfo()
            store.set('user', JSON.parse(result as string))
        } catch (e) {
            console.error(e)
            if (e instanceof Error) throw new Error(e.message)
        }
    }

    async logout(): Promise<void> {
        try {
            await this.commonApi.logout()
            store.reset()
        } catch (e) {
            console.error(e)
            if (e instanceof Error) throw new Error(e.message)
        }
    }

    async downloadResource(path: string): Promise<unknown> {
        try {
            const result = await this.commonApi.downloadResource(path)
            return result
        } catch (e) {
            console.error(e)
            if (e instanceof Error) throw new Error(e.message)
        }
    }
}

const controller = new CommonController()

export default controller
