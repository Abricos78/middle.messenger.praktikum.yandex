"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Avatar_1 = __importDefault(require("../../entities/ui/Avatar"));
const PrevLink_1 = __importDefault(require("../../entities/ui/PrevLink"));
const ProfilePasswordForm_1 = __importDefault(require("../../features/ui/ProfilePasswordForm"));
const Block_1 = __importDefault(require("../../shared/common/Block"));
const ProfilePassword_hbs_1 = __importDefault(require("./ProfilePassword.hbs"));
class ProfilePassword extends Block_1.default {
    constructor() {
        super({
            PrevLink: new PrevLink_1.default(),
            Avatar: new Avatar_1.default(),
            ProfilePasswordForm: new ProfilePasswordForm_1.default()
        });
    }
    render() {
        return this.compile(ProfilePassword_hbs_1.default, this.props);
    }
}
exports.default = ProfilePassword;
//# sourceMappingURL=ProfilePassword.js.map