import { Dashboard } from "./dashboard";
import React from 'react';
import Logo from "./logo";
import {FontAwesomeBox, HomeBox, TablesBox, UsersBox} from "./btnMenus";
import ReactDom from "react-dom/client";
import {BtnToggleNaviagtion, InfoAccountBtn} from "./topHeader";
import {CreateHomeBreadcrumbs, HomeBreadcrumbs, TablesBreadcrumbs} from "./breadcumb";

(function () {
    "use strict";
    const loadSpinner = document.getElementById("load-spinner");
    const attr = document.createAttribute("class");
    const root = ReactDom.createRoot(document.getElementById("navigations-menus"));
    const headerMenu = ReactDom.createRoot(document.getElementById("header-menu"));
    const spinner = ReactDom.createRoot(loadSpinner);
    const breadcumb = ReactDom.createRoot(document.getElementById("breadcumb"));

    attr.value = "fixed w-full h-full bg-sky-50 top-0 left-0 z-[9999] flex items-center justify-center";
    loadSpinner.setAttributeNode(attr);

    document.getElementById("breadcumb").setAttribute("class", 'font-medium px-7 py-5 mt-14');

    spinner.render(React.createElement(SVG));

    root.render(React.createElement(
        React.Fragment, null,
        React.createElement(Logo, null),
        React.createElement(HomeBox, null),
        React.createElement(UsersBox, null),
        React.createElement(TablesBox, null),
        React.createElement(FontAwesomeBox, null)
    ));

    headerMenu.render(React.createElement(
        React.Fragment,
        null,
        React.createElement(BtnToggleNaviagtion, null),
        React.createElement(InfoAccountBtn, null)
    ));

    breadcumb.render(React.createElement(
        React.Fragment,
        null,
        React.createElement(TablesBreadcrumbs, null),
        " \\ ",
        React.createElement(CreateHomeBreadcrumbs, null)
    ));

    Dashboard();
})();