"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Block_1 = __importDefault(require("../../common/Block"));
const ErrorMessage_hbs_1 = __importDefault(require("./ErrorMessage.hbs"));
require("./index.scss");
class ErrorMessage extends Block_1.default {
    constructor(props) {
        super(props);
    }
    render() {
        return this.compile(ErrorMessage_hbs_1.default, this.props);
    }
}
exports.default = ErrorMessage;
//# sourceMappingURL=index.js.map