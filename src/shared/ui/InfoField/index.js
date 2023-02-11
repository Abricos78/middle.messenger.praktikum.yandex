import Handlebars from "handlebars/dist/handlebars.runtime";
import infoField from "./InfoField.hbs";
import inputInfo from "./InputInfo.hbs";
import "./index.scss";

Handlebars.registerPartial("InfoField", infoField);
Handlebars.registerPartial("InputInfo", inputInfo);
