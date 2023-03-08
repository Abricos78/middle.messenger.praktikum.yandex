"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ChatList_1 = __importDefault(require("../../../entities/ui/ChatList"));
const SearchChat_1 = __importDefault(require("../../../features/ui/SearchChat"));
const Block_1 = __importDefault(require("../../../shared/common/Block"));
const Chats_hbs_1 = __importDefault(require("./Chats.hbs"));
require("./index.scss");
class Chats extends Block_1.default {
    constructor() {
        super({
            SearchChat: new SearchChat_1.default(),
            ChatList: new ChatList_1.default()
        });
    }
    render() {
        return this.compile(Chats_hbs_1.default, this.props);
    }
}
exports.default = Chats;
//# sourceMappingURL=index.js.map