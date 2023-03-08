"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Block_1 = __importDefault(require("../../../shared/common/Block"));
const NavigationPages_hbs_1 = __importDefault(require("./NavigationPages.hbs"));
require("./index.scss");
const Link_1 = __importDefault(require("../../../shared/ui/Link"));
const utils_1 = require("../../../shared/utils");
class Navigation extends Block_1.default {
    constructor() {
        super({
            505: new Link_1.default({
                content: '505',
                events: {
                    click: (e) => {
                        e.preventDefault();
                        (0, utils_1.renderDOM)(505);
                    }
                }
            }),
            404: new Link_1.default({
                content: '404',
                events: {
                    click: (e) => {
                        e.preventDefault();
                        (0, utils_1.renderDOM)(404);
                    }
                }
            }),
            LoginPage: new Link_1.default({
                content: 'Login',
                events: {
                    click: (e) => {
                        e.preventDefault();
                        (0, utils_1.renderDOM)('login');
                    }
                }
            }),
            SigninPage: new Link_1.default({
                content: 'Signin',
                events: {
                    click: (e) => {
                        e.preventDefault();
                        (0, utils_1.renderDOM)('signin');
                    }
                }
            }),
            MainPage: new Link_1.default({
                content: 'Main',
                events: {
                    click: (e) => {
                        e.preventDefault();
                        (0, utils_1.renderDOM)('main');
                    }
                }
            }),
            ProfilePage: new Link_1.default({
                content: 'Profile',
                events: {
                    click: (e) => {
                        e.preventDefault();
                        (0, utils_1.renderDOM)('profile');
                    }
                }
            }),
            ProfileDataPage: new Link_1.default({
                content: 'Profile Data',
                events: {
                    click: (e) => {
                        e.preventDefault();
                        (0, utils_1.renderDOM)('profileData');
                    }
                }
            }),
            ProfilePasswordPage: new Link_1.default({
                content: 'Profile Password',
                events: {
                    click: (e) => {
                        e.preventDefault();
                        (0, utils_1.renderDOM)('profilePassword');
                    }
                }
            })
        });
    }
    render() {
        return this.compile(NavigationPages_hbs_1.default, this.props);
    }
}
exports.default = Navigation;
//# sourceMappingURL=index.js.map