"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _XHRequest_instances, _XHRequest_request, _XHRequest_queryString;
Object.defineProperty(exports, "__esModule", { value: true });
var METHODS;
(function (METHODS) {
    METHODS["GET"] = "GET";
    METHODS["POST"] = "POST";
    METHODS["PUT"] = "PUT";
    METHODS["DELETE"] = "DELETE";
})(METHODS || (METHODS = {}));
class XHRequest {
    constructor() {
        _XHRequest_instances.add(this);
    }
    get(url, options = {}) {
        return __classPrivateFieldGet(this, _XHRequest_instances, "m", _XHRequest_request).call(this, url, Object.assign(Object.assign({}, options), { method: METHODS.GET }));
    }
    post(url, options = {}) {
        return __classPrivateFieldGet(this, _XHRequest_instances, "m", _XHRequest_request).call(this, url, Object.assign(Object.assign({}, options), { method: METHODS.POST }));
    }
    put(url, options = {}) {
        return __classPrivateFieldGet(this, _XHRequest_instances, "m", _XHRequest_request).call(this, url, Object.assign(Object.assign({}, options), { method: METHODS.PUT }));
    }
    delete(url, options = {}) {
        return __classPrivateFieldGet(this, _XHRequest_instances, "m", _XHRequest_request).call(this, url, Object.assign(Object.assign({}, options), { method: METHODS.DELETE }));
    }
}
_XHRequest_instances = new WeakSet(), _XHRequest_request = function _XHRequest_request(url, options) {
    const { method, headers = {}, data } = options;
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        const isGet = method === METHODS.GET;
        Object.entries(headers).forEach(([header, value]) => { xhr.setRequestHeader(header, value); });
        xhr.onabort = reject;
        xhr.onerror = reject;
        xhr.onload = () => { resolve(xhr); };
        if (isGet) {
            xhr.open(method, `${url}${__classPrivateFieldGet(this, _XHRequest_instances, "m", _XHRequest_queryString).call(this, data)}`);
            xhr.send();
        }
        else {
            xhr.open(method, url);
            xhr.send(data);
        }
    });
}, _XHRequest_queryString = function _XHRequest_queryString(data) {
    if (!data)
        return '';
    return ('?' + Object.entries(data).map(([key, value]) => `${key}=${value}`).join('&'));
};
exports.default = XHRequest;
//# sourceMappingURL=xhr.js.map