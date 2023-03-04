"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Block_1 = __importDefault(require("../../../shared/common/Block"));
const ProfileDataForm_hbs_1 = __importDefault(require("./ProfileDataForm.hbs"));
require("./index.scss");
const Button_1 = __importDefault(require("../../../shared/ui/Button"));
const Input_1 = require("../../../shared/ui/Input");
class ProfileDataForm extends Block_1.default {
    constructor() {
        const data = [
            {
                name: 'email',
                label: 'Почта',
                value: 'pochta@yandex.ru',
                type: 'email',
                validationType: 'EMAIL',
            },
            {
                name: 'login',
                label: 'Логин',
                value: 'ivanivanov',
                type: 'text',
                validationType: 'LOGIN',
            },
            {
                name: 'first_name',
                label: 'Имя',
                value: 'Иван',
                type: 'text',
                validationType: 'NAME',
            },
            {
                name: 'second_name',
                label: 'Фамилия',
                value: 'Иванов',
                type: 'text',
                validationType: 'NAME',
            },
            {
                name: 'display_name',
                label: 'Имя в чате',
                value: 'Иван',
                type: 'text',
            },
            {
                name: 'phone',
                label: 'Телефон',
                value: '+7 (909) 967 30 30',
                type: 'tel',
                validationType: 'PHONE',
            },
        ];
        super({
            Inputs: data.map((input) => new Input_1.InfoInput(input)),
            SaveButton: new Button_1.default({
                content: 'Сохранить'
            })
        });
    }
    render() {
        return this.compile(ProfileDataForm_hbs_1.default, this.props);
    }
}
exports.default = ProfileDataForm;
//# sourceMappingURL=index.js.map