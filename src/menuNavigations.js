import React, { useContext } from 'react';
import Logo from "./logo";
import {FontAwesomeBox, HomeBox, TablesBox, UsersBox} from "./btnMenus";
import {navigationToggle} from "./navigationToggle";

export function MenuNavigations() {
    return React.createElement(
        navigationToggle.Consumer,
        null,
        function ({action, toggle}) {
            return React.createElement(
                'div',
                { className: "fixed top-0 left-0 h-full bg-sky-500 font-medium text-orange-100 " + action.width, id: "navigations-menus" },
                React.createElement(Logo, null),
                React.createElement(HomeBox, null),
                React.createElement(UsersBox, null),
                React.createElement(TablesBox, null),
                React.createElement(FontAwesomeBox, null)
            )
        }
    );
}