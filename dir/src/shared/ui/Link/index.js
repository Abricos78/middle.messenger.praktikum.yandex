"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Block_1 = __importDefault(require("../../common/Block"));
const Link_hbs_1 = __importDefault(require("./Link.hbs"));
require("./index.scss");
class Link extends Block_1.default {
    constructor(props) {
        super(Object.assign({}, props));
    }
    render() {
        return this.compile(Link_hbs_1.default, this.props);
    }
}
exports.default = Link;
//# sourceMappingURL=index.js.map