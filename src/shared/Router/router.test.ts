import { expect } from "chai"
import Router from "."

describe('Router class', () => {
    it('getRoute method', () => {
        const location = '/test'
        //@ts-ignore
        const route = Router.use(location, {})
        expect(Router.getRoute(location)?.pathname).to.eq(location)
    })
    it('go method', () => {
        const location = '/test1'
        Router.go(location)
        expect(window.location.pathname).to.eq(location)
    })
})
