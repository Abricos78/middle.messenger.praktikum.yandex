"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Block_1 = __importDefault(require("../../../shared/common/Block"));
const IncomeMessage_hbs_1 = __importDefault(require("./IncomeMessage.hbs"));
require("./index.scss");
class IncomeMessage extends Block_1.default {
    render() {
        return this.compile(IncomeMessage_hbs_1.default, this.props);
    }
}
exports.default = IncomeMessage;
//# sourceMappingURL=index.js.map