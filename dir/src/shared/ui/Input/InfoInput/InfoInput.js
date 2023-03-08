"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Block_1 = __importDefault(require("../../../common/Block"));
const ErrorMessage_1 = __importDefault(require("../../ErrorMessage"));
const Input_1 = __importDefault(require("../Input"));
const InfoInput_hbs_1 = __importDefault(require("./InfoInput.hbs"));
class InfoInput extends Block_1.default {
    constructor(props) {
        const { label, name, type, placeholder, value } = props;
        const Error = new ErrorMessage_1.default();
        super({
            label,
            Input: new Input_1.default({
                class: 'infoField__value',
                name,
                type,
                placeholder,
                value,
                ErrorMessage: Error
            }),
            ErrorMessage: Error
        });
    }
    render() {
        return this.compile(InfoInput_hbs_1.default, this.props);
    }
}
exports.default = InfoInput;
//# sourceMappingURL=InfoInput.js.map