
enum METHODS {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE'
}

interface Options {
    method: METHODS
    headers?: Record<string, string>
    data?: XMLHttpRequestBodyInit
}

class XHRequest {
    get(url: string, options: Record<string, unknown> = {}): Promise<unknown> {
        return this.#request(url, {
            ...options,
            method: METHODS.GET,
        })
    }

    post(url: string, options: Record<string, unknown> = {}): Promise<unknown> {
        return this.#request(url, {
            ...options,
            method: METHODS.POST,
        })
    }

    put(url: string, options: Record<string, unknown> = {}): Promise<unknown> {
        return this.#request(url, {
            ...options,
            method: METHODS.PUT,
        })
    }

    delete(url: string, options: Record<string, unknown> = {}): Promise<unknown> {
        return this.#request(url, {
            ...options,
            method: METHODS.DELETE,
        })
    }

    #request(url: string, options: Options): Promise<unknown> {
        const { method, headers = {}, data } = options
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest()
            const isGet = method === METHODS.GET

            Object.entries(headers).forEach(([header, value]) => { xhr.setRequestHeader(header, value) })

            xhr.onabort = reject
            xhr.onerror = reject
            xhr.onload = () => { resolve(xhr) }

            if (isGet) {
                xhr.open(method, `${url}${this.#queryString(data)}`)
                xhr.send()
            } else {
                xhr.open(method, url)
                xhr.send(data)
            }
        })
    }

    #queryString(data?: XMLHttpRequestBodyInit): string {
        if (!data) return ''
        return ('?' + Object.entries(data).map(([key, value]) => `${key}=${value}`).join('&'))
    }
}

export default XHRequest
