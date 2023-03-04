type fn = (...args: unknown[]) => void

class EventBus {
    listeners: Record<string, fn[]> = {}

    on(event: string, fn: fn): void {
        const { listeners } = this
        if (!listeners[event]) listeners[event] = []
        listeners[event].push(fn)
    }

    off(event: string, fn: fn): void {
        const { listeners } = this
        if (!listeners[event]) throw new Error(`События ${event} нет`)
        listeners[event] = listeners[event].filter((item) => item !== fn)
    }

    emit(event: string, ...args: unknown[]): void {
        const { listeners } = this
        if (!listeners[event]) throw new Error(`События ${event} нет`)
        listeners[event]
            .forEach((fn: fn) => { fn(...args) })
    }
}

export default EventBus
