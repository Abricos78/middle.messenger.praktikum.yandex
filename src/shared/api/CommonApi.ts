import BaseApi from './BaseApi'

class CommonApi extends BaseApi {
    logout(): Promise<unknown> {
        return this.http.post('/auth/logout')
    }

    getUserInfo(): Promise<unknown> {
        return this.http.get('/auth/user')
    }

    downloadResource(path: string): Promise<unknown> {
        return this.http.get(`/resources${path}`)
    }

    create = undefined
    read = undefined
    update = undefined
    delete = undefined
}

export default CommonApi
