import XHRequest from './xhr'

abstract class BaseApi {
    http: XHRequest
    constructor(endPoint = '') {
        this.http = new XHRequest(endPoint)
    }

    abstract create?(data: unknown): Promise<unknown>

    abstract read?(id?: number): Promise<unknown>

    abstract update?(data: unknown): Promise<unknown>

    abstract delete?(): Promise<unknown>
}

export default BaseApi
