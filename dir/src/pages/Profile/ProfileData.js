"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Avatar_1 = __importDefault(require("../../entities/ui/Avatar"));
const PrevLink_1 = __importDefault(require("../../entities/ui/PrevLink"));
const ProfileDataForm_1 = __importDefault(require("../../features/ui/ProfileDataForm"));
const Block_1 = __importDefault(require("../../shared/common/Block"));
const ProfileData_hbs_1 = __importDefault(require("./ProfileData.hbs"));
class ProfileData extends Block_1.default {
    constructor() {
        super({
            PrevLink: new PrevLink_1.default(),
            Avatar: new Avatar_1.default(),
            ProfileDataForm: new ProfileDataForm_1.default(),
        });
    }
    render() {
        return this.compile(ProfileData_hbs_1.default, this.props);
    }
}
exports.default = ProfileData;
//# sourceMappingURL=ProfileData.js.map