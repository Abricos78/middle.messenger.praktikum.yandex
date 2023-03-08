"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Block_1 = __importDefault(require("../../../shared/common/Block"));
const SendMessage_hbs_1 = __importDefault(require("./SendMessage.hbs"));
require("./index.scss");
const Button_1 = __importDefault(require("../../../shared/ui/Button"));
const ArrowRight_svg_1 = __importDefault(require("../../../../static/icons/ArrowRight.svg"));
class SendMessage extends Block_1.default {
    constructor() {
        super({
            Button: new Button_1.default({
                src: ArrowRight_svg_1.default
            })
        });
    }
    render() {
        return this.compile(SendMessage_hbs_1.default, this.props);
    }
}
exports.default = SendMessage;
//# sourceMappingURL=index.js.map