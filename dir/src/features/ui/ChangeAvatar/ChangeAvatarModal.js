"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Block_1 = __importDefault(require("../../../shared/common/Block"));
const ChangeAvatarModal_hbs_1 = __importDefault(require("./ChangeAvatarModal.hbs"));
const Button_1 = __importDefault(require("../../../shared/ui/Button"));
class ChangeAvatarModal extends Block_1.default {
    constructor() {
        super({
            Button: new Button_1.default({
                content: 'Поменять'
            }),
        });
    }
    render() {
        return this.compile(ChangeAvatarModal_hbs_1.default, this.props);
    }
}
exports.default = ChangeAvatarModal;
//# sourceMappingURL=ChangeAvatarModal.js.map