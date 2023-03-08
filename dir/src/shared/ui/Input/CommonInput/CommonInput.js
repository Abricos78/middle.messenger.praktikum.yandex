"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Block_1 = __importDefault(require("../../../common/Block"));
const ErrorMessage_1 = __importDefault(require("../../ErrorMessage"));
const Input_1 = __importDefault(require("../Input"));
const CommonInput_hbs_1 = __importDefault(require("./CommonInput.hbs"));
class CommonInput extends Block_1.default {
    constructor(props) {
        const { label, name, placeholder, type, value, validationType } = props;
        const Error = new ErrorMessage_1.default();
        super({
            label,
            Input: new Input_1.default({
                class: 'input',
                name,
                placeholder,
                type,
                value,
                validationType,
                ErrorMessage: Error,
            }),
            ErrorMessage: Error,
        });
    }
    render() {
        return this.compile(CommonInput_hbs_1.default, this.props);
    }
}
exports.default = CommonInput;
//# sourceMappingURL=CommonInput.js.map