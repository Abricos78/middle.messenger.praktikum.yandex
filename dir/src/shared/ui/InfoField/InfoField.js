"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Block_1 = __importDefault(require("../../common/Block"));
const InfoField_hbs_1 = __importDefault(require("./InfoField.hbs"));
class InfoField extends Block_1.default {
    constructor(props) {
        super(props);
    }
    render() {
        return this.compile(InfoField_hbs_1.default, this.props);
    }
}
exports.default = InfoField;
//# sourceMappingURL=InfoField.js.map