import type Block from '../common/Block'
import Route from './Route'

class Router {
    #routes: Route[] = []
    #currentRoute: Route | null = null
    #history = window.history
    #rootQuery: string
    #NotFoundRoute: Route

    constructor(rootQuery: string) {
        this.#rootQuery = rootQuery
    }

    use(pathname: string, block: typeof Block): this {
        const route = new Route(pathname, block, {
            rootQuery: this.#rootQuery
        })
        if (pathname === '*') this.#NotFoundRoute = route
        else this.#routes.push(route)
        return this
    }

    #onRoute(pathname: string): void {
        const route = this.getRoute(pathname) ?? this.#NotFoundRoute

        if (!route) return
        if (this.#currentRoute) this.#currentRoute.leave()

        this.#currentRoute = route
        route.render()
    }

    start(): void {
        window.onpopstate = ({ currentTarget }: Event) => {
            this.#onRoute((currentTarget as Window).location.pathname)
        }
        this.#onRoute(window.location.pathname)
    }

    go(pathname: string): void {
        this.#history.pushState({}, '', pathname)
        this.#onRoute(pathname)
    }

    getRoute(pathname: string): Route | undefined {
        return this.#routes.find((route: Route) => route.pathname === pathname)
    }

    back(): void {
        this.#history.back()
    }

    forward(): void {
        this.#history.forward()
    }
}

export default new Router('#app')
