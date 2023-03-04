"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validation = exports.renderDOM = exports.getRandomUuid = void 0;
const renderDOM_1 = __importDefault(require("./renderDOM"));
exports.renderDOM = renderDOM_1.default;
const utils_1 = require("./utils");
Object.defineProperty(exports, "getRandomUuid", { enumerable: true, get: function () { return utils_1.getRandomUuid; } });
const validation_1 = __importDefault(require("./validation"));
exports.validation = validation_1.default;
//# sourceMappingURL=index.js.map