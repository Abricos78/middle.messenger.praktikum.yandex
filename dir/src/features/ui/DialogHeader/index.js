"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Avatar_1 = __importDefault(require("../../../entities/ui/Avatar"));
const Block_1 = __importDefault(require("../../../shared/common/Block"));
const DialogHeader_hbs_1 = __importDefault(require("./DialogHeader.hbs"));
require("./index.scss");
class DialogHeader extends Block_1.default {
    constructor() {
        super({
            Avatar: new Avatar_1.default()
        });
    }
    render() {
        return this.compile(DialogHeader_hbs_1.default, this.props);
    }
}
exports.default = DialogHeader;
//# sourceMappingURL=index.js.map