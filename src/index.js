import * as pages from "./pages";
import "./shared";
import "./features";
import "./entities";
import "./widgets";
import avatarIcon from "../static/icons/Avatar.svg";
import ArrowLeft from "../static/icons/ArrowLeft.svg";
import ArrowRight from "../static/icons/ArrowRight.svg";

const root = document.getElementById("root");
const PAGES = {
    ...pages,
    ChangeAvatarPage: pages.ProfilePage,
};
const PROPS = {
    404: {
        code: 404,
        message: "Не туда попали",
    },
    505: {
        code: 505,
        message: "Мы уже фиксим",
    },
    ProfilePage: {
        icons: {
            button: ArrowLeft,
            avatar: avatarIcon,
        },
    },
    ChangeAvatarPage: {
        icons: {
            button: ArrowLeft,
            avatar: avatarIcon,
        },
        modal: "active",
    },
    ProfileDataPage: {
        icons: {
            button: ArrowLeft,
            avatar: avatarIcon,
        },
    },
    ProfilePasswordPage: {
        icons: {
            button: ArrowLeft,
            avatar: avatarIcon,
        },
    },
    MainPage: {
        icons: {
            button: ArrowRight,
        },
    },
};

window.render = (pageName, propsName = pageName) => {
    const html = PAGES[pageName](PROPS[propsName]);
    root.innerHTML = html;
};

window.addEventListener("DOMContentLoaded", () => window.render("LoginPage"));
