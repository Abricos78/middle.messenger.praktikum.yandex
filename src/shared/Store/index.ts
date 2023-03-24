import type Block from '../common/Block'
import EventBus from '../common/EventBus'
import { type User } from '../types'
import { set } from './utils'

export type State = {
    user?: User
    chats?: []
    currentChat?: {
        id: number
        title: string
    }
    messages?: Record<number, unknown[]>
}

enum StoreEvent {
    UPDATED = 'updated'
}

class Store extends EventBus {
    #state: State = {
        chats: [],
        messages: {}
    }

    set(path: string, value: unknown): void {
        set(this.#state, path, value)
        if (this.listeners[StoreEvent.UPDATED]) this.emit(StoreEvent.UPDATED, this.#state)
    }

    reset(): void {
        this.#state = {
            user: undefined,
            chats: [],
            messages: {}
        }
    }

    getState(): State {
        return this.#state
    }
}

export const withStore = (mapStateToProps: (state: State) => Record<string, unknown> | []) => (Component: typeof Block): typeof Block => {
    let propsFromState

    return class WithStore extends Component {
        constructor(props = {}) {
            propsFromState = mapStateToProps(store.getState())
            super({ ...props, ...propsFromState })

            store.on(StoreEvent.UPDATED, (newState) => {
                const newPropsFromState = mapStateToProps(newState as Record<string, unknown>)

                propsFromState = { ...newPropsFromState }

                this.setProps({ ...propsFromState })
            })
        }
    }
}

const store = new Store()

export default store
