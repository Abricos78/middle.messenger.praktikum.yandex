"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidationType;
(function (ValidationType) {
    ValidationType["NAME"] = "name";
    ValidationType["LOGIN"] = "login";
    ValidationType["EMAIL"] = "email";
    ValidationType["PASSWORD"] = "password";
    ValidationType["PHONE"] = "phone";
    ValidationType["MESSAGE"] = "message";
})(ValidationType || (ValidationType = {}));
function validation(value, validationType) {
    if (!value)
        return 'Заполните поле';
    switch (validationType) {
        case 'LOGIN':
            if (!/([-_]?[a-z0-9]+){3,20}$/i.test(value))
                return 'Некорректное поле login';
            break;
        case 'PASSWORD':
            break;
        case 'EMAIL':
            break;
        case 'NAME':
            break;
        case 'PHONE':
            break;
    }
    return null;
}
exports.default = validation;
//# sourceMappingURL=validation.js.map