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
            if (!/^(?=.*\d)(?=.*[A-ZА-Я]).{8,40}$/i.test(value))
                return 'Некорректный пароль';
            break;
        case 'EMAIL':
            if (!/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i.test(value))
                return 'Некорректное поле email';
            break;
        case 'NAME':
            if (!/^[A-ZА-Я]+([A-ZА-Яa-zа-я0-9-]+)/.test(value))
                return 'Некорректное поле name';
            break;
        case 'PHONE':
            if (!/(?:\+|\d)[\d\-() ]{10,15}\d/g.test(value))
                return 'Некорректное поле phone';
            break;
    }
    return null;
}
exports.default = validation;
//# sourceMappingURL=validation.js.map