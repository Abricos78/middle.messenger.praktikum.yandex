"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pages_1 = require("../../pages");
const Routes = {
    404: pages_1.Error404,
    505: pages_1.Error505,
    login: pages_1.LoginPage,
    signin: pages_1.SigninPage,
    main: pages_1.MainPage,
    profile: pages_1.ProfilePage,
    profileData: pages_1.ProfileDataPage,
    profilePassword: pages_1.ProfilePasswordPage
};
let currentPage = null;
const renderDOM = (pageName) => {
    const root = document.getElementById('root');
    root.innerHTML = '';
    if (currentPage)
        currentPage.dispatchComponentWillUnmount();
    const page = new Routes[pageName]();
    currentPage = page;
    root.append(page.element);
    page.dispatchComponentDidMount();
};
exports.default = renderDOM;
//# sourceMappingURL=renderDOM.js.map