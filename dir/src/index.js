"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./shared");
require("./features");
require("./entities");
require("./widgets");
const utils_1 = require("./shared/utils");
const NavigationPages_1 = __importDefault(require("./widgets/ui/NavigationPages"));
window.addEventListener('DOMContentLoaded', () => {
    const rootNav = document.getElementById('nav');
    const navigationBlock = new NavigationPages_1.default();
    rootNav === null || rootNav === void 0 ? void 0 : rootNav.append(navigationBlock.element);
    (0, utils_1.renderDOM)('login');
});
//# sourceMappingURL=index.js.map