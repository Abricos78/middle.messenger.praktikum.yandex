"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Block_1 = __importDefault(require("../../common/Block"));
const utils_1 = require("../../utils");
const Input_hbs_1 = __importDefault(require("./Input.hbs"));
class Input extends Block_1.default {
    constructor(props) {
        console.log(props);
        super(Object.assign(Object.assign({}, props), { events: {
                focusout: () => {
                    console.log('focusout');
                    this.validation();
                },
                focusin: () => {
                    console.log('focusin');
                }
            } }));
    }
    validation() {
        const message = (0, utils_1.validation)(this.element.value, this.props.validationType);
        console.log(message);
        const ErrorMessage = this.children.ErrorMessage;
        if (message) {
            ErrorMessage.setProps({
                text: message
            });
            ErrorMessage.show();
            this.error = true;
        }
        else {
            ErrorMessage.hide();
            this.error = false;
        }
        return message;
    }
    render() {
        return this.compile(Input_hbs_1.default, this.props);
    }
}
exports.default = Input;
//# sourceMappingURL=Input.js.map