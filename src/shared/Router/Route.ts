import type Block from '../common/Block'
import { renderDOM } from '../utils'

interface IProps {
    rootQuery: string
}

class Route {
    pathname: string
    #block: Block | null
    #blockClass: typeof Block
    #props: IProps

    constructor(pathname: string, block: typeof Block, props: IProps) {
        this.pathname = pathname
        this.#blockClass = block
        this.#props = props
    }

    render(): void {
        if (!this.#block) {
            this.#block = new this.#blockClass()
            renderDOM(this.#props.rootQuery, this.#block.element)
            return
        }
        this.#block.show()
    }

    leave(): void {
        if (!this.#block) return
        this.#block.element.remove()
        this.#block = null
    }

    navigate(pathname: string): void {
        if (pathname === this.pathname) {
            this.render()
        }
    }
}

export default Route
