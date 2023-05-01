
enum METHODS {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE'
}

interface Options {
    method: METHODS
    headers?: Record<string, string>
    data: Record<string, unknown> | FormData | number[]
}

type HTTPMethod = (path?: string, data?: Record<string, unknown> | FormData | number[]) => Promise<unknown>

class XHRequest {
    #API_URL = 'https://ya-praktikum.tech/api/v2'
    #endPoint: string

    constructor(endPoint: string) {
        this.#endPoint = `${this.#API_URL}${endPoint}`
    }

    get: HTTPMethod = (path = '', data = {}) => {
        return this.#request(this.#endPoint + path, {
            data,
            method: METHODS.GET,
        })
    }

    post: HTTPMethod = (path = '', data = {}) => {
        return this.#request(this.#endPoint + path, {
            data,
            method: METHODS.POST,
        })
    }

    put: HTTPMethod = (path = '', data = {}) => {
        return this.#request(this.#endPoint + path, {
            data,
            method: METHODS.PUT,
        })
    }

    delete: HTTPMethod = (path = '', data = {}) => {
        return this.#request(this.#endPoint + path, {
            data,
            method: METHODS.DELETE,
        })
    }

    #request(url: string, options: Options): Promise<unknown> {
        const { method, headers = {}, data } = options
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest()
            const isGet = method === METHODS.GET
            xhr.withCredentials = true

            xhr.onabort = reject
            xhr.onerror = reject

            xhr.onload = () => {
                if (xhr.status === 401) reject(new Error(xhr.response))
                resolve(xhr.response)
            }

            xhr.open(method, isGet ? `${url}${this.#queryString(data as Record<string, unknown>)}` : url)

            if (!(data instanceof FormData)) {
                Object.entries({
                    ...headers,
                    'Content-Type': 'application/json; charset=utf-8'
                }).forEach(([header, value]) => { xhr.setRequestHeader(header, value) })
            }

            if (isGet) {
                xhr.send()
            } else {
                xhr.send(data instanceof FormData ? data : JSON.stringify(data))
            }
        })
    }

    #queryString(data?: Record<string, unknown>): string {
        if (!data) return ''
        return ('?' + Object.entries(data).map(([key, value]) => `${key}=${value}`).join('&'))
    }
}

export default XHRequest
