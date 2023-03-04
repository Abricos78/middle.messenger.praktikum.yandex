"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Block_1 = __importDefault(require("./Block"));
class Form extends Block_1.default {
    constructor(props) {
        super(Object.assign(Object.assign({}, props), { events: {
                submit: (e) => {
                    e.preventDefault();
                    this.submit();
                }
            } }));
    }
    submit() {
        let hasError = false;
        const data = {};
        this.children.Inputs.forEach(({ children }) => {
            const Input = children.Input;
            const { props: { name, } } = Input;
            data[name] = Input.element.value;
            if (Input.error === undefined)
                Input.validation();
            if (Input.error)
                hasError = true;
        });
        console.log({ data, hasError });
    }
}
exports.default = Form;
//# sourceMappingURL=Form.js.map