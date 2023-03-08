"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Block_1 = __importDefault(require("../../../shared/common/Block"));
const Avatar_hbs_1 = __importDefault(require("./Avatar.hbs"));
require("./index.scss");
class Avatar extends Block_1.default {
    constructor(props = {}) {
        super(props);
    }
    render() {
        return this.compile(Avatar_hbs_1.default, this.props);
    }
}
exports.default = Avatar;
//# sourceMappingURL=index.js.map