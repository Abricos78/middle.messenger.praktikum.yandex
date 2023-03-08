"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Block_1 = __importDefault(require("../../common/Block"));
const Modal_hbs_1 = __importDefault(require("./Modal.hbs"));
require("./index.scss");
class Modal extends Block_1.default {
    constructor(props) {
        super(Object.assign(Object.assign({}, props), { events: {
                click: (e) => {
                    const node = e.target;
                    if (node.classList.contains('modal'))
                        this.hide();
                }
            } }));
    }
    render() {
        return this.compile(Modal_hbs_1.default, this.props);
    }
}
exports.default = Modal;
//# sourceMappingURL=index.js.map