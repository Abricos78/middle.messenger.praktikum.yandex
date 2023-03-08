"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomUuid = void 0;
const getRandomUuid = (length = 36) => crypto.randomUUID().slice(0, length);
exports.getRandomUuid = getRandomUuid;
//# sourceMappingURL=utils.js.map