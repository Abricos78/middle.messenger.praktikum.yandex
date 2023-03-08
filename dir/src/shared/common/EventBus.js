"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EventBus {
    constructor() {
        this.listeners = {};
    }
    on(event, fn) {
        const { listeners } = this;
        if (!listeners[event])
            listeners[event] = [];
        listeners[event].push(fn);
    }
    off(event, fn) {
        const { listeners } = this;
        if (!listeners[event])
            throw new Error(`События ${event} нет`);
        listeners[event] = listeners[event].filter((item) => item !== fn);
    }
    emit(event, ...args) {
        const { listeners } = this;
        if (!listeners[event])
            throw new Error(`События ${event} нет`);
        listeners[event]
            .forEach((fn) => { fn(...args); });
    }
}
exports.default = EventBus;
//# sourceMappingURL=EventBus.js.map