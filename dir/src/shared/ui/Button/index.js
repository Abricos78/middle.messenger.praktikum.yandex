"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Block_1 = __importDefault(require("../../common/Block"));
const Button_hbs_1 = __importDefault(require("./Button.hbs"));
require("./index.scss");
class Button extends Block_1.default {
    constructor(props) {
        super(props);
    }
    render() {
        return this.compile(Button_hbs_1.default, this.props);
    }
}
exports.default = Button;
//# sourceMappingURL=index.js.map