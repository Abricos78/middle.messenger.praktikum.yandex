"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfilePasswordPage = exports.ProfileDataPage = exports.ProfilePage = exports.MainPage = exports.SigninPage = exports.LoginPage = exports.Error505 = exports.Error404 = void 0;
const Error_1 = require("./Error");
Object.defineProperty(exports, "Error404", { enumerable: true, get: function () { return Error_1.Error404; } });
Object.defineProperty(exports, "Error505", { enumerable: true, get: function () { return Error_1.Error505; } });
const Auth_1 = require("./Auth");
Object.defineProperty(exports, "LoginPage", { enumerable: true, get: function () { return Auth_1.LoginPage; } });
Object.defineProperty(exports, "SigninPage", { enumerable: true, get: function () { return Auth_1.SigninPage; } });
const Profile_1 = require("./Profile");
Object.defineProperty(exports, "ProfilePage", { enumerable: true, get: function () { return Profile_1.ProfilePage; } });
Object.defineProperty(exports, "ProfileDataPage", { enumerable: true, get: function () { return Profile_1.ProfileDataPage; } });
Object.defineProperty(exports, "ProfilePasswordPage", { enumerable: true, get: function () { return Profile_1.ProfilePasswordPage; } });
const Main_1 = __importDefault(require("./Main"));
exports.MainPage = Main_1.default;
//# sourceMappingURL=index.js.map