"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Block_1 = __importDefault(require("../../../shared/common/Block"));
const ProfilePasswordForm_hbs_1 = __importDefault(require("./ProfilePasswordForm.hbs"));
require("./index.scss");
const Button_1 = __importDefault(require("../../../shared/ui/Button"));
const Input_1 = require("../../../shared/ui/Input");
class ProfilePasswordForm extends Block_1.default {
    constructor() {
        const data = [
            {
                name: 'oldPassword',
                label: 'Старый пароль',
                placeholder: 'Старый пароль',
                type: 'password',
                validationType: 'PASSWORD',
            },
            {
                name: 'newPassword',
                label: 'Новый пароль',
                placeholder: 'Новый пароль',
                type: 'password',
                validationType: 'PASSWORD',
            },
            {
                name: 'repeatNewPassword',
                label: 'Повторите новый пароль',
                placeholder: 'Повторите новый пароль',
                type: 'password',
                validationType: 'PASSWORD',
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
        return this.compile(ProfilePasswordForm_hbs_1.default, this.props);
    }
}
exports.default = ProfilePasswordForm;
//# sourceMappingURL=index.js.map