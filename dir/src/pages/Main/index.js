"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Block_1 = __importDefault(require("../../shared/common/Block"));
const Main_hbs_1 = __importDefault(require("./Main.hbs"));
require("./index.scss");
const Chats_1 = __importDefault(require("../../widgets/ui/Chats"));
const Dialog_1 = __importDefault(require("../../widgets/ui/Dialog"));
class Main extends Block_1.default {
    constructor() {
        super({
            Chats: new Chats_1.default(),
            Dialog: new Dialog_1.default(),
        });
    }
    render() {
        return this.compile(Main_hbs_1.default, this.props);
    }
}
exports.default = Main;
//# sourceMappingURL=index.js.map