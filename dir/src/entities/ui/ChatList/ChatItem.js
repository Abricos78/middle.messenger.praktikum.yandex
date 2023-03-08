"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Block_1 = __importDefault(require("../../../shared/common/Block"));
const Button_1 = __importDefault(require("../../../shared/ui/Button"));
const Avatar_1 = __importDefault(require("../Avatar"));
const ChatItem_hbs_1 = __importDefault(require("./ChatItem.hbs"));
class ChatItem extends Block_1.default {
    constructor() {
        super({
            Avatar: new Avatar_1.default(),
            Notification: new Button_1.default({
                content: '2',
                buttonType: 'round',
            })
        });
    }
    render() {
        return this.compile(ChatItem_hbs_1.default, this.props);
    }
}
exports.default = ChatItem;
//# sourceMappingURL=ChatItem.js.map