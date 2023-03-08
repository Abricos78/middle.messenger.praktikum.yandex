"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PrevLink_1 = __importDefault(require("../../entities/ui/PrevLink"));
const ChangeAvatar_1 = __importDefault(require("../../features/ui/ChangeAvatar"));
const Block_1 = __importDefault(require("../../shared/common/Block"));
const InfoField_1 = require("../../shared/ui/InfoField");
const Link_1 = __importDefault(require("../../shared/ui/Link"));
const Profile_hbs_1 = __importDefault(require("./Profile.hbs"));
class Profile extends Block_1.default {
    constructor() {
        super({
            PrevLink: new PrevLink_1.default(),
            ChangeAvatar: new ChangeAvatar_1.default(),
            EmailInfo: new InfoField_1.InfoField({
                label: 'Почта',
                value: 'pochta@yandex.ru',
            }),
            LoginInfo: new InfoField_1.InfoField({
                label: 'Логин',
                value: 'ivanivanov',
            }),
            FirstNameInfo: new InfoField_1.InfoField({
                label: 'Имя',
                value: 'Иван',
            }),
            SecondNameInfo: new InfoField_1.InfoField({
                label: 'Фамилия',
                value: 'Иванов',
            }),
            NicknameInfo: new InfoField_1.InfoField({
                label: 'Имя в чате',
                value: 'Иван',
            }),
            PhoneInfo: new InfoField_1.InfoField({
                label: 'Телефон',
                value: '+7 (909) 967 30 30',
            }),
            ChangeData: new Link_1.default({
                content: 'Изменить данные'
            }),
            ChangePassword: new Link_1.default({
                content: 'Изменить пароль'
            }),
            Exit: new Link_1.default({
                content: 'Выйти',
                color: 'red'
            })
        });
    }
    render() {
        return this.compile(Profile_hbs_1.default, this.props);
    }
}
exports.default = Profile;
//# sourceMappingURL=Profile.js.map