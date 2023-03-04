"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Avatar_1 = __importDefault(require("../../../entities/ui/Avatar"));
const Block_1 = __importDefault(require("../../../shared/common/Block"));
const ChangeAvatar_hbs_1 = __importDefault(require("./ChangeAvatar.hbs"));
require("./index.scss");
const Avatar_svg_1 = __importDefault(require("../../../../static/icons/Avatar.svg"));
const ChangeAvatarModal_1 = __importDefault(require("./ChangeAvatarModal"));
const Modal_1 = __importDefault(require("../../../shared/ui/Modal"));
class ChangeAvatar extends Block_1.default {
    constructor() {
        super({
            title: 'Иван',
            Avatar: new Avatar_1.default({
                src: Avatar_svg_1.default,
                events: {
                    click: () => {
                        this.children.Modal.show('flex');
                    }
                }
            }),
            Modal: new Modal_1.default({
                Content: new ChangeAvatarModal_1.default()
            })
        });
    }
    render() {
        return this.compile(ChangeAvatar_hbs_1.default, this.props);
    }
}
exports.default = ChangeAvatar;
//# sourceMappingURL=index.js.map