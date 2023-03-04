"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _Block_instances, _Block_element, _Block_eventBus, _Block_id, _Block_getChildrenAndProps, _Block_makePropsProxy, _Block_registerEvents, _Block_init, _Block_render, _Block_componentDidUpdate, _Block_componentDidMount, _Block_removeEvents, _Block_addEvents;
Object.defineProperty(exports, "__esModule", { value: true });
const EventBus_1 = __importDefault(require("./EventBus"));
const utils_1 = require("../utils");
var EVENTS;
(function (EVENTS) {
    EVENTS["INIT"] = "init";
    EVENTS["FLOW_CDM"] = "flow:component-did-mount";
    EVENTS["FLOW_CDU"] = "flow:component-did-update";
    EVENTS["RENDER"] = "render";
})(EVENTS || (EVENTS = {}));
class Block {
    constructor(propsWithChildren = {}) {
        _Block_instances.add(this);
        // #meta: Meta
        _Block_element.set(this, void 0);
        _Block_eventBus.set(this, void 0);
        _Block_id.set(this, (0, utils_1.getRandomUuid)(6));
        __classPrivateFieldSet(this, _Block_eventBus, new EventBus_1.default(), "f");
        const { props, children } = __classPrivateFieldGet(this, _Block_instances, "m", _Block_getChildrenAndProps).call(this, propsWithChildren);
        // this.#meta = {
        //     props,
        // }
        this.children = children;
        this.props = __classPrivateFieldGet(this, _Block_instances, "m", _Block_makePropsProxy).call(this, props);
        __classPrivateFieldGet(this, _Block_instances, "m", _Block_registerEvents).call(this, __classPrivateFieldGet(this, _Block_eventBus, "f"));
        __classPrivateFieldGet(this, _Block_eventBus, "f").emit(EVENTS.INIT);
    }
    compile(template, context = {}) {
        const copyObject = Object.assign({}, context);
        Object.entries(this.children).forEach(([key, child]) => {
            if (Array.isArray(child)) {
                copyObject[key] = child.map((block) => `<div data-id=${__classPrivateFieldGet(block, _Block_id, "f")}></div>`);
            }
            else {
                copyObject[key] = `<div data-id=${__classPrivateFieldGet(child, _Block_id, "f")}></div>`;
            }
        });
        const html = template(copyObject);
        const temp = document.createElement('template');
        temp.innerHTML = html;
        function replaceElement(block) {
            const elem = temp.content.querySelector(`[data-id='${__classPrivateFieldGet(block, _Block_id, "f")}']`);
            if (!elem)
                return;
            elem.replaceWith(block.element);
        }
        Object.entries(this.children).forEach(([_, child]) => {
            if (Array.isArray(child))
                child.forEach((elem) => { replaceElement(elem); });
            else
                replaceElement(child);
        });
        return temp.content;
    }
    // Переопределяется пользователем
    init() { }
    // Может переопределяется
    render() {
        return document.createElement('template').content;
    }
    // Может переопределяется
    componentDidUpdate() {
        return true;
    }
    // Может переопределяться
    componentDidMount() { }
    dispatchComponentDidMount() {
        __classPrivateFieldGet(this, _Block_instances, "m", _Block_componentDidMount).call(this);
    }
    dispatchComponentWillUnmount() {
        __classPrivateFieldGet(this, _Block_instances, "m", _Block_removeEvents).call(this);
    }
    setProps(nextProps) {
        if (!nextProps)
            return;
        Object.assign(this.props, nextProps);
    }
    get element() {
        return __classPrivateFieldGet(this, _Block_element, "f");
    }
    show(displayType = 'block') {
        __classPrivateFieldGet(this, _Block_element, "f").style.display = displayType;
    }
    hide() {
        __classPrivateFieldGet(this, _Block_element, "f").style.display = 'none';
    }
}
_Block_element = new WeakMap(), _Block_eventBus = new WeakMap(), _Block_id = new WeakMap(), _Block_instances = new WeakSet(), _Block_getChildrenAndProps = function _Block_getChildrenAndProps(propsWithChildren) {
    const props = {};
    const children = {};
    Object.entries(propsWithChildren).forEach(([key, value]) => {
        if (Array.isArray(value) && value.every((item) => item instanceof Block))
            children[key] = value;
        if (value instanceof Block)
            children[key] = value;
        else
            props[key] = value;
    });
    return { props, children };
}, _Block_makePropsProxy = function _Block_makePropsProxy(props) {
    return new Proxy(props, {
        get(target, prop) {
            const value = target[prop];
            return typeof value === 'function' ? value.bind(target) : value;
        },
        deleteProperty() {
            throw new Error('Нет доступа');
        },
        set: (target, prop, val) => {
            target[prop] = val;
            __classPrivateFieldGet(this, _Block_eventBus, "f").emit(EVENTS.FLOW_CDU, target, target);
            return true;
        },
    });
}, _Block_registerEvents = function _Block_registerEvents(eventBus) {
    eventBus.on(EVENTS.INIT, __classPrivateFieldGet(this, _Block_instances, "m", _Block_init).bind(this));
    eventBus.on(EVENTS.FLOW_CDM, __classPrivateFieldGet(this, _Block_instances, "m", _Block_componentDidMount).bind(this));
    eventBus.on(EVENTS.FLOW_CDU, __classPrivateFieldGet(this, _Block_instances, "m", _Block_componentDidUpdate).bind(this));
    eventBus.on(EVENTS.RENDER, __classPrivateFieldGet(this, _Block_instances, "m", _Block_render).bind(this));
}, _Block_init = function _Block_init() {
    this.init();
    __classPrivateFieldGet(this, _Block_eventBus, "f").emit(EVENTS.RENDER);
}, _Block_render = function _Block_render() {
    const fragment = this.render();
    const newElement = fragment.firstElementChild;
    if (__classPrivateFieldGet(this, _Block_element, "f")) {
        __classPrivateFieldGet(this, _Block_element, "f").replaceWith(newElement);
    }
    __classPrivateFieldSet(this, _Block_element, newElement, "f");
    __classPrivateFieldGet(this, _Block_instances, "m", _Block_addEvents).call(this);
}, _Block_componentDidUpdate = function _Block_componentDidUpdate() {
    const response = this.componentDidUpdate();
    if (!response)
        return;
    __classPrivateFieldGet(this, _Block_eventBus, "f").emit(EVENTS.RENDER);
}, _Block_componentDidMount = function _Block_componentDidMount() {
    this.componentDidMount();
}, _Block_removeEvents = function _Block_removeEvents() {
    Object.entries(__classPrivateFieldGet(this, _Block_eventBus, "f").listeners).forEach(([key, callbacks]) => {
        callbacks.forEach((fn) => { __classPrivateFieldGet(this, _Block_eventBus, "f").off(key, fn); });
    });
}, _Block_addEvents = function _Block_addEvents() {
    const { events } = this.props;
    if (!events)
        return;
    Object.entries(events).forEach(([key, fn]) => {
        __classPrivateFieldGet(this, _Block_element, "f").addEventListener(key, fn);
    });
};
exports.default = Block;
//# sourceMappingURL=Block.js.map