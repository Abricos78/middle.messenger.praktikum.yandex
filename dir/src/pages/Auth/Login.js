"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Block_1 = __importDefault(require("../../shared/common/Block"));
const Login_hbs_1 = __importDefault(require("./Login.hbs"));
const LoginForm_1 = __importDefault(require("../../features/ui/LoginForm"));
class Login extends Block_1.default {
    constructor() {
        super({
            LoginForm: new LoginForm_1.default()
        });
    }
    render() {
        return this.compile(Login_hbs_1.default, this.props);
    }
}
exports.default = Login;
//# sourceMappingURL=Login.js.map