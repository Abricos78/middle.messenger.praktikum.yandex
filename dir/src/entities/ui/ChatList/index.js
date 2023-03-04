"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Block_1 = __importDefault(require("../../../shared/common/Block"));
const ChatItem_1 = __importDefault(require("./ChatItem"));
const ChatList_hbs_1 = __importDefault(require("./ChatList.hbs"));
require("./index.scss");
class ChatList extends Block_1.default {
    constructor() {
        super({
            ChatItem: new ChatItem_1.default()
        });
    }
    render() {
        return this.compile(ChatList_hbs_1.default, this.props);
    }
}
exports.default = ChatList;
//# sourceMappingURL=index.js.map