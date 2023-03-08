import EventBus from './EventBus'
import type Handlebars from 'handlebars'
import { getRandomUuid } from '../utils'

enum EVENTS {
    INIT = 'init',
    FLOW_CDM = 'flow:component-did-mount',
    FLOW_CDU = 'flow:component-did-update',
    RENDER = 'render',
}
type ObjectType<T> = Record<string, T>
type UnknownObject = ObjectType<unknown>

// interface Meta {
//     props: UnknownObject
// }

interface ChildrenAndProps {
    props: UnknownObject
    children: ObjectType<Block | Block[]>
}

class Block {
    // #meta: Meta
    #element: HTMLElement
    #eventBus: EventBus
    props: UnknownObject
    children: Record<string, Block | Block[]>
    #id: string = getRandomUuid(6)

    constructor (propsWithChildren = {}) {
        this.#eventBus = new EventBus()
        const { props, children } = this.#getChildrenAndProps(propsWithChildren)
        // this.#meta = {
        //     props,
        // }
        this.children = children
        this.props = this.#makePropsProxy(props)
        this.#registerEvents(this.#eventBus)
        this.#eventBus.emit(EVENTS.INIT)
    }

    #getChildrenAndProps(propsWithChildren: UnknownObject): ChildrenAndProps {
        const props: UnknownObject = {}
        const children: Record<string, Block | Block[]> = {}
        Object.entries(propsWithChildren).forEach(([key, value]) => {
            if (Array.isArray(value) && value.every((item) => item instanceof Block)) children[key] = value
            if (value instanceof Block) children[key] = value
            else props[key] = value
        })
        return { props, children }
    }

    compile(template: Handlebars.TemplateDelegate, context: UnknownObject = {}): DocumentFragment {
        const copyObject = { ...context }
        Object.entries(this.children).forEach(([key, child]) => {
            if (Array.isArray(child)) {
                copyObject[key] = child.map((block) => `<div data-id=${block.#id}></div>`)
            } else {
                copyObject[key] = `<div data-id=${child.#id}></div>`
            }
        })

        const html = template(copyObject)
        const temp = document.createElement('template')
        temp.innerHTML = html

        function replaceElement(block: Block): void {
            const elem = temp.content.querySelector(`[data-id='${block.#id}']`)
            if (!elem) return
            elem.replaceWith(block.element)
        }

        Object.entries(this.children).forEach(([_, child]) => {
            if (Array.isArray(child)) child.forEach((elem) => { replaceElement(elem) })
            else replaceElement(child)
        })
        return temp.content
    }

    #makePropsProxy(props: UnknownObject): UnknownObject {
        return new Proxy(props, {
            get(target, prop: string) {
                const value: unknown = target[prop]
                return typeof value === 'function' ? value.bind(target) : value
            },
            deleteProperty() {
                throw new Error('Нет доступа')
            },
            set: (target: UnknownObject, prop: string, val: unknown): boolean => {
                target[prop] = val
                this.#eventBus.emit(EVENTS.FLOW_CDU, target, target)
                return true
            },
        })
    }

    #registerEvents(eventBus: EventBus): void {
        eventBus.on(EVENTS.INIT, this.#init.bind(this))
        eventBus.on(EVENTS.FLOW_CDM, this.#componentDidMount.bind(this))
        eventBus.on(EVENTS.FLOW_CDU, this.#componentDidUpdate.bind(this))
        eventBus.on(EVENTS.RENDER, this.#render.bind(this))
    }

    // Переопределяется пользователем
    init(): void {}

    #init(): void {
        this.init()
        this.#eventBus.emit(EVENTS.RENDER)
    }

    #render(): void {
        const fragment = this.render()
        const newElement = fragment.firstElementChild as HTMLElement

        if (this.#element) {
            this.#element.replaceWith(newElement)
        }

        this.#element = newElement

        this.#addEvents()
    }

    // Может переопределяется
    render(): DocumentFragment {
        return document.createElement('template').content
    }

    // Может переопределяется
    componentDidUpdate(): boolean {
        return true
    }

    #componentDidUpdate(): void {
        const response = this.componentDidUpdate()
        if (!response) return
        this.#eventBus.emit(EVENTS.RENDER)
    }

    // Может переопределяться
    componentDidMount(): void {}

    #componentDidMount(): void {
        this.componentDidMount()
    }

    dispatchComponentDidMount(): void {
        this.#componentDidMount()
    }

    #removeEvents(): void {
        Object.entries(this.#eventBus.listeners).forEach(([key, callbacks]) => {
            callbacks.forEach((fn) => { this.#element.removeEventListener(key, fn) })
        })
    }

    dispatchComponentWillUnmount(): void {
        this.#removeEvents()
    }

    setProps(nextProps: UnknownObject): void {
        if (!nextProps) return
        Object.assign(this.props, nextProps)
    }

    get element(): HTMLElement {
        return this.#element
    }

    #addEvents(): void {
        const { events } = this.props
        if (!events) return
        Object.entries(events).forEach(([key, fn]) => {
            this.#element.addEventListener(key, fn)
        })
    }

    show(displayType = 'block'): void {
        this.#element.style.display = displayType
    }

    hide(): void {
        this.#element.style.display = 'none'
    }
}

export default Block
