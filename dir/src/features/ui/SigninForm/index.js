"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Block_1 = __importDefault(require("../../../shared/common/Block"));
const SigninForm_hbs_1 = __importDefault(require("./SigninForm.hbs"));
require("./index.scss");
const Button_1 = __importDefault(require("../../../shared/ui/Button"));
const Link_1 = __importDefault(require("../../../shared/ui/Link"));
const Input_1 = require("../../../shared/ui/Input");
class SigninForm extends Block_1.default {
    constructor() {
        const data = [
            {
                name: 'email',
                label: 'Почта',
                placeholder: 'Почта',
                type: 'email',
                validationType: 'EMAIL',
            },
            {
                name: 'login',
                label: 'Логин',
                placeholder: 'Логин',
                type: 'text',
                validationType: 'LOGIN',
            },
            {
                name: 'first_name',
                label: 'Имя',
                placeholder: 'Имя',
                type: 'text',
                validationType: 'NAME',
            },
            {
                name: 'second_name',
                label: 'Фамилия',
                placeholder: 'Фамилия',
                type: 'text',
                validationType: 'NAME',
            },
            {
                name: 'phone',
                label: 'Телефон',
                placeholder: 'Телефон',
                type: 'tel',
                validationType: 'PHONE',
            },
            {
                name: 'password',
                label: 'Пароль',
                placeholder: 'Пароль',
                type: 'password',
                validationType: 'PASSWORD',
            },
            {
                name: 'check_password',
                label: 'Пароль (ещё раз)',
                placeholder: 'Пароль',
                type: 'password',
                validationType: 'PASSWORD',
            },
        ];
        super({
            Inputs: data.map((input) => new Input_1.CommonInput(input)),
            SignButton: new Button_1.default({
                content: 'Зарегистрироваться',
                type: 'submit',
            }),
            Link: new Link_1.default({
                content: 'Войти'
            }),
            events: {
                submit: (e) => {
                    e.preventDefault();
                    const formNode = this.element;
                    console.log(new FormData(formNode));
                }
            }
        });
    }
    render() {
        return this.compile(SigninForm_hbs_1.default, this.props);
    }
}
exports.default = SigninForm;
//# sourceMappingURL=index.js.map