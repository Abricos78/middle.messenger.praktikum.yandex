"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Block_1 = __importDefault(require("../../shared/common/Block"));
const Signin_hbs_1 = __importDefault(require("./Signin.hbs"));
const SigninForm_1 = __importDefault(require("../../features/ui/SigninForm"));
class Signin extends Block_1.default {
    constructor() {
        super({
            SigninForm: new SigninForm_1.default()
        });
    }
    render() {
        return this.compile(Signin_hbs_1.default, this.props);
    }
}
exports.default = Signin;
//# sourceMappingURL=Signin.js.map