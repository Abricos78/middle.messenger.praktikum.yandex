"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Form_1 = __importDefault(require("../../../shared/common/Form"));
const LoginForm_hbs_1 = __importDefault(require("./LoginForm.hbs"));
require("./index.scss");
const Button_1 = __importDefault(require("../../../shared/ui/Button"));
const Link_1 = __importDefault(require("../../../shared/ui/Link"));
const Input_1 = require("../../../shared/ui/Input");
class LoginForm extends Form_1.default {
    constructor() {
        const data = [
            {
                name: 'login',
                label: 'Логин',
                placeholder: 'Логин',
                type: 'text',
                validationType: 'LOGIN'
            },
            {
                name: 'password',
                label: 'Пароль',
                placeholder: 'Пароль',
                type: 'password',
                validationType: 'password'
            },
        ];
        super({
            Inputs: data.map((input) => new Input_1.CommonInput(input)),
            AuthButton: new Button_1.default({
                content: 'Авторизоваться',
                type: 'submit',
            }),
            Link: new Link_1.default({
                content: 'Нет аккаунта?'
            }),
            events: {
                submit: (e) => {
                    e.preventDefault();
                    this.submit();
                }
            }
        });
    }
    render() {
        return this.compile(LoginForm_hbs_1.default, this.props);
    }
}
exports.default = LoginForm;
//# sourceMappingURL=index.js.map