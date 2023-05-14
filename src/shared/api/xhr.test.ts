import sinon from 'sinon'
import XHRequest from './xhr'
import { expect } from 'chai'

describe('XHRequest class', () => {
    const XHR = sinon.useFakeXMLHttpRequest()
    let requests: sinon.SinonFakeXMLHttpRequest[] = []

    // @ts-ignore
    global.XMLHttpRequest = XHR

    XHR.onCreate = (xhr) => requests.push(xhr)

    beforeEach(() => requests = [])

    it('get method', () => {
        const transport = new XHRequest('/auth')
        transport.get()
        expect(requests[0].method).to.eq('GET')
    })

    it('post method', () => {
        const transport = new XHRequest('/auth')
        transport.post('/login', { test: 'test' })
        expect(requests[0].method).to.eq('POST')
    })

    it('put method', () => {
        const transport = new XHRequest('/auth')
        transport.put('/login', { test: 'test' })
        expect(requests[0].method).to.eq('PUT')
    })

    it('delete method', () => {
        const transport = new XHRequest('/auth')
        transport.delete()
        expect(requests[0].method).to.eq('DELETE')
    })
})
