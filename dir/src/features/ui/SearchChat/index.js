"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Block_1 = __importDefault(require("../../../shared/common/Block"));
const SearchChat_hbs_1 = __importDefault(require("./SearchChat.hbs"));
require("./index.scss");
class SearchChat extends Block_1.default {
    render() {
        return this.compile(SearchChat_hbs_1.default, this.props);
    }
}
exports.default = SearchChat;
//# sourceMappingURL=index.js.map