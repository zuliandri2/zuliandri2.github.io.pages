"use strict";

import React from 'react';
import {Link} from "react-router-dom";
import {navigationToggle, toggleNavigation} from "./navigationToggle";

class HomeImage extends React.Component {
    render() {
        return React.createElement(
            navigationToggle.Consumer,
            null,
            function ({action, toggle}) {
                const isHide = toggleNavigation.hide === action ? " text-lg " : "";
                return React.createElement(
                    'i',
                    {className: "fa fa-home fa-fw" + isHide, "aria-hidden": true},
                );
            }
        );
    }
}

class HomeText extends React.Component {
    render() {
        return React.createElement(
            navigationToggle.Consumer,
            null,
            function ({action, toggle}) {
                const isHide = toggleNavigation.hide === action ? " hidden " : "";
                return React.createElement(
                    'span',
                    {className: "pl-3" + isHide},
                    'Home'
                );
            }
        );
    }
}

class HomeContent extends React.Component {
    render() {
        return React.createElement(
            navigationToggle.Consumer,
            null,
            function ({action, toggle}) {
                const isHide = toggleNavigation.hide === action ? " text-center " : "";
                return React.createElement(
                    Link,
                    { className: "py-2 inline-block px-4 w-full" + isHide, to: "/" },
                    React.createElement(HomeImage, null),
                    React.createElement(HomeText, null),
                );
            }
        );
    }
}

class HomeBox extends React.Component {
    render() {
        return React.createElement(
            "div",
            { className: "menus hover:bg-blue-100 hover:text-sky-500 menus cursor-pointer hover:tracking-widest duration-500 ease-in-out" },
            React.createElement(HomeContent)
        );
    }
}

class CreateItemMenuUserImage extends React.Component {
    render() {
        return React.createElement(
            'i',
            {className: "fa fa-ellipsis-h fa-fw", "aria-hidden": true},
        );
    }
}

class CreateItemMenuUserText extends React.Component {
    render() {
        return React.createElement(
            'span',
            {className: "pl-3"},
            'Create'
        );
    }
}

class CreateItemMenuUserContent extends React.Component {
    render() {
        return React.createElement(
            navigationToggle.Consumer,
            null,
            function ({action, toggle}) {
                const isHide = toggleNavigation.hide === action ? " text-sm " : "";
                return React.createElement(
                    Link,
                    { className: "py-2 inline-block py-2 w-full" + isHide, to: "/user/create" },
                    React.createElement(CreateItemMenuUserImage),
                    React.createElement(CreateItemMenuUserText)
                );
            }
        );
    }
}

class CreateItemMenuUserBox extends React.Component {
    render() {
        return React.createElement(
            'div',
            {className: "text-gray-700 hover:bg-blue-100 hover:text-sky-500 cursor-pointer break-all px-5 rounded-tr hover:tracking-widest tracking-normal duration-500 ease-in-out"},
            React.createElement(CreateItemMenuUserContent)
        );
    }
}

class EditItemMenuUserImage extends React.Component {
    render() {
        return React.createElement(
            'i',
            {className: "fa fa-ellipsis-h fa-fw", "aria-hidden": true},
        );
    }
}

class EditItemMenuUserText extends React.Component {
    render() {
        return React.createElement(
            'span',
            {className: "pl-3"},
            'Create'
        );
    }
}

class EditItemMenuUserContent extends React.Component {
    render() {
        return React.createElement(
            Link,
            {className: "py-2 inline-block py-2 w-full", to: "/user/edit"},
            React.createElement(EditItemMenuUserImage),
            React.createElement(EditItemMenuUserText)
        );
    }
}

class EditItemMenuUserBox extends React.Component {
    render() {
        return React.createElement(
            'div',
            {className: "text-gray-700 hover:bg-blue-100 hover:text-sky-500 cursor-pointer break-all px-5 rounded-tr hover:tracking-widest tracking-normal duration-500 ease-in-out"},
            React.createElement(EditItemMenuUserContent)
        );
    }
}

class DeleteItemMenuUserImage extends React.Component {
    render() {
        return React.createElement(
            'i',
            {className: "fa fa-ellipsis-h fa-fw", "aria-hidden": true},
        );
    }
}

class DeleteItemMenuUserText extends React.Component {
    render() {
        return React.createElement(
            'span',
            {className: "pl-3"},
            'Create'
        );
    }
}

class DeleteItemMenuUserContent extends React.Component {
    render() {
        return React.createElement(
            Link,
            {className: "py-2 inline-block py-2 w-full", to: "/user/delete"},
            React.createElement(DeleteItemMenuUserImage),
            React.createElement(DeleteItemMenuUserText)
        );
    }
}

class DeleteItemMenuUserBox extends React.Component {
    render() {
        return React.createElement(
            'div',
            {className: "text-gray-700 hover:bg-blue-100 hover:text-sky-500 cursor-pointer break-all px-5 hover:tracking-widest tracking-normal duration-500 ease-in-out rounded-br"},
            React.createElement(DeleteItemMenuUserContent)
        );
    }
}

class ListElementCreateIteMenuUser extends React.Component {
    render() {
        return React.createElement(
            'li',
            null,
            React.createElement(CreateItemMenuUserBox)
        );
    }
}

class ListElementEditItemMenuUser extends React.Component {
    render() {
        return React.createElement(
            'li',
            null,
            React.createElement(EditItemMenuUserBox)
        );
    }
}

class ListElementDeleteItemMenuUser extends React.Component {
    render() {
        return React.createElement(
            'li',
            null,
            React.createElement(DeleteItemMenuUserBox)
        );
    }
}

class ContentItemMenuUsers extends React.Component {
    render() {
        return React.createElement(
            'ul',
        {className: "text-left bg-gradient-to-r from-sky-500 to-blue-700 rounded-tr rounded-br"},
            React.createElement(ListElementCreateIteMenuUser),
            React.createElement(ListElementEditItemMenuUser),
            React.createElement(ListElementDeleteItemMenuUser)
        );
    }
}

class BoxItemMenuUser extends React.Component {
    render() {
        return React.createElement(
            'div',
            {className: "fixed menu-items"},
            React.createElement(ContentItemMenuUsers)
        );
    }
}

class UsersImage extends React.Component {
    render() {
        return React.createElement(
            navigationToggle.Consumer,
            null,
            function ({action, toggle}) {
                const isHide = toggleNavigation.hide === action ? " text-lg " : "";
                return React.createElement(
                    'i',
                    {className: "fa fa-users fa-fw" + isHide, "aria-hidden": true},
                );
            }
        );
    }
}

class UsersText extends React.Component {
    render() {
        return React.createElement(
            navigationToggle.Consumer,
            null,
            function ({action, toggle}) {
                const isHide = toggleNavigation.hide === action ? " hidden " : "";
                return React.createElement(
                    'span',
                    {className: "pl-3" + isHide},
                    'Users'
                );
            }
        );
    }
}

class UsersContent extends React.Component {
    render() {
        return React.createElement(
            navigationToggle.Consumer,
            null,
            function ({action, toggle}) {
                const isHide = toggleNavigation.hide === action ? " text-center " : "";
                return React.createElement(
                    "a",
                    { className: "py-2 inline-block px-4 w-full" + isHide},
                    React.createElement(UsersImage),
                    React.createElement(UsersText),
                );
            }
        );
    }
}

class UsersBox extends React.Component {
    render() {
        return React.createElement(
            'div',
            {className: "hover:bg-blue-100 hover:text-sky-500 menus cursor-pointer hover:tracking-widest duration-500 ease-in-out"},
            React.createElement(UsersContent),
            React.createElement(BoxItemMenuUser)
        );
    }
}

class TablesImage extends React.Component {
    render() {
        return React.createElement(
            navigationToggle.Consumer,
            null,
            function ({action, toggle}) {
                const isHide = toggleNavigation.hide === action ? " text-lg " : "";
                return React.createElement(
                    'i',
                    {className: "fa fa-map-marker fa-fw" + isHide, "aria-hidden": true},
                );
            }
        );
    }
}

class TablesText extends React.Component {
    render() {
        return React.createElement(
            navigationToggle.Consumer,
            null,
            function ({action, toggle}) {
                const isHide = toggleNavigation.hide === action ? " hidden " : "";
                return React.createElement(
                    'span',
                    {className: "pl-3" + isHide},
                    'Tables'
                );
            }
        );
    }
}

class TablesContent extends React.Component {
    render() {
        return React.createElement(
            navigationToggle.Consumer,
            null,
            function ({action, toggle}) {
                const isHide = toggleNavigation.hide === action ? " text-center " : "";
                return React.createElement(
                    Link,
                    {to: "/table", className: "py-2 inline-block px-4 w-full" + isHide, href: "./tables.html"},
                    React.createElement(TablesImage),
                    React.createElement(TablesText),
                );
            }
        );
    }
}

class TablesBox extends React.Component {
    render() {
        return React.createElement(
            "div",
            {className: "hover:bg-blue-100 hover:text-sky-500 menus cursor-pointer hover:tracking-widest duration-500 ease-in-out"},
            React.createElement(TablesContent)
        );
    }
}

class FontAwesomeImage extends React.Component {
    render() {
        return React.createElement(
            navigationToggle.Consumer,
            null,
            function ({action, toggle}) {
                const isHide = toggleNavigation.hide === action ? " text-lg " : "";
                return React.createElement(
                    'i',
                    {className: "fa fa-font-awesome fa-fw" + isHide, "aria-hidden": true},
                );
            }
        );
    }
}

class FontAwesomeText extends React.Component {
    render() {
        return React.createElement(
            navigationToggle.Consumer,
            null,
            function ({action, toggle}) {
                const isHide = toggleNavigation.hide === action ? " hidden " : "";
                return React.createElement(
                    'span',
                    {className: "pl-3" + isHide},
                    'Font Awesome'
                );
            }
        );
    }
}

class FontAwesomeContent extends React.Component {
    render() {
        return React.createElement(
            navigationToggle.Consumer,
            null,
            function ({action, toggle}) {
                const isHide = toggleNavigation.hide === action ? " text-center " : "";
                return React.createElement(
                    Link,
                    {to: "/font-awesome", className: "py-2 inline-block px-4 w-full" + isHide},
                    React.createElement(FontAwesomeImage),
                    React.createElement(FontAwesomeText),
                );
            }
        );
    }
}

class FontAwesomeBox extends React.Component {
    render() {
        return React.createElement(
            'div',
            {className: "hover:bg-blue-100 hover:text-sky-500 menus cursor-pointer hover:tracking-widest duration-500 ease-in-out"},
            React.createElement(FontAwesomeContent)
        );
    }
}



export { HomeBox, UsersBox, TablesBox, FontAwesomeBox };