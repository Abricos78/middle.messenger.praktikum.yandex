import Handlebars from "handlebars/dist/handlebars.runtime";
import ChangeAvatar from "./ChangeAvatar.hbs";
import ChangeAvatarModal from "./ChangeAvatarModal.hbs";
import "./index.scss";

Handlebars.registerPartial("ChangeAvatar", ChangeAvatar);
Handlebars.registerPartial("ChangeAvatarModal", ChangeAvatarModal);
