"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Block_1 = __importDefault(require("../../../shared/common/Block"));
const PrevLink_hbs_1 = __importDefault(require("./PrevLink.hbs"));
require("./index.scss");
const Button_1 = __importDefault(require("../../../shared/ui/Button"));
const ArrowLeft_svg_1 = __importDefault(require("../../../../static/icons/ArrowLeft.svg"));
class PrevLink extends Block_1.default {
    constructor() {
        super({
            Button: new Button_1.default({
                src: ArrowLeft_svg_1.default,
                events: {
                    click: () => {
                        console.log('Click PrevLink');
                    }
                }
            })
        });
    }
    render() {
        return this.compile(PrevLink_hbs_1.default, this.props);
    }
}
exports.default = PrevLink;
//# sourceMappingURL=index.js.map