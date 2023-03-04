"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Block_1 = __importDefault(require("../../shared/common/Block"));
const Link_1 = __importDefault(require("../../shared/ui/Link"));
const Error_hbs_1 = __importDefault(require("./Error.hbs"));
class Error505 extends Block_1.default {
    constructor() {
        super({
            code: 505,
            message: 'Мы уже фиксим',
            Link: new Link_1.default({
                content: 'Назад к чатам',
                events: {
                    click: (e) => {
                        e.preventDefault();
                        console.log('Hello 505');
                    }
                }
            })
        });
    }
    render() {
        return this.compile(Error_hbs_1.default, this.props);
    }
}
exports.default = Error505;
//# sourceMappingURL=505.js.map