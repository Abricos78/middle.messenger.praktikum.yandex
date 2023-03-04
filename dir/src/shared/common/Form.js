"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Block_1 = __importDefault(require("./Block"));
class Form extends Block_1.default {
    submit() {
        console.log(this.children.Inputs);
    }
}
exports.default = Form;
//# sourceMappingURL=Form.js.map