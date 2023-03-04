"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const IncomeMessage_1 = __importDefault(require("../../../entities/ui/IncomeMessage"));
const DialogHeader_1 = __importDefault(require("../../../features/ui/DialogHeader"));
const SendMessage_1 = __importDefault(require("../../../features/ui/SendMessage"));
const Block_1 = __importDefault(require("../../../shared/common/Block"));
const Dialog_hbs_1 = __importDefault(require("./Dialog.hbs"));
require("./index.scss");
class Dialog extends Block_1.default {
    constructor() {
        super({
            DialogHeader: new DialogHeader_1.default(),
            SendMessage: new SendMessage_1.default(),
            IncomeMessage: new IncomeMessage_1.default(),
            IncomeMessage1: new IncomeMessage_1.default(),
            IncomeMessage2: new IncomeMessage_1.default(),
        });
    }
    render() {
        return this.compile(Dialog_hbs_1.default, this.props);
    }
}
exports.default = Dialog;
//# sourceMappingURL=index.js.map