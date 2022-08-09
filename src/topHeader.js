"use strict";

import React, { useState, useEffect } from 'react';

function ImageBtnToggleNaviagtion() {
    const nav_menus = document.getElementById("navigations-menus"),
        header_menu = document.getElementById("header-menu"),
        side_content = document.getElementById("side-content");

    const [toggle, setToggle] = useState(true);

    useEffect(() => {
        if (toggle) {
            navToggleShow();
        } else {
            navToggleHide();
        }
    });

    function navToggleHide() {
        if (nav_menus.classList.contains("w-[15%]")) nav_menus.classList.remove("w-[15%]");
        if (!nav_menus.classList.contains("w-[10%]")) nav_menus.classList.add("w-[10%]");
        if (side_content.classList.contains("ml-[15%]")) side_content.classList.remove("ml-[15%]");
        if (!side_content.classList.contains("ml-[10%]")) side_content.classList.add("ml-[10%]");
        if (header_menu.classList.contains("w-[85%]")) header_menu.classList.remove("w-[85%]");
        if (!header_menu.classList.contains("w-[90%]")) header_menu.classList.add("w-[90%]");
    }

    function navToggleShow() {
        if (!nav_menus.classList.contains("w-[15%]")) nav_menus.classList.add("w-[15%]");
        if (nav_menus.classList.contains("w-[10%]")) nav_menus.classList.remove("w-[10%]");
        if (side_content.classList.contains("ml-[10%]")) side_content.classList.remove("ml-[10%]");
        if (!side_content.classList.contains("ml-[15%]")) side_content.classList.add("ml-[15%]");
        if (header_menu.classList.contains("w-[90%]")) header_menu.classList.remove("w-[90%]");
        if (!header_menu.classList.contains("w-[85%]")) header_menu.classList.add("w-[85%]");
    }

    function isToggle() {
        let t = true;
        if (toggle) t = false;
        setToggle(t);
    }

    return React.createElement(
        'i',
        {
            className: "fa fa-bars fa-1x text-neutral-400 text-neutral-600 mt-2.5 mb-2.5",
            id: "toggle-btn-nav-menus",
            onClick: isToggle
        },
    );
}

class BtnToggleNaviagtion extends React.Component {
    render() {
        return React.createElement(
            'a',
            {className: "inline-block cursor-pointer"},
            React.createElement(ImageBtnToggleNaviagtion)
        );
    }
}

class InfoAccountBtn extends React.Component {
    render() {
        return React.createElement(
            'a',
            {
                className: "w-2/12 text-center fixed right-3.5"
            },
            React.createElement(ImageInfoAccountBtn),
            React.createElement(BoxInfoAccountBtn)
        );
    }
}

function ImageInfoAccountBtn() {

    const [isToggle, setIsToggle] = useState(false);

    function profile() {
        let menus = document.getElementById("menus");

        if (isToggle === true) {
            if (menus.classList.contains("hidden")) menus.classList.remove("hidden");
            if (!menus.classList.contains("block")) menus.classList.add("block");
        } else {
            if (!menus.classList.contains("hidden")) menus.classList.add("hidden");
            if (menus.classList.contains("block")) menus.classList.remove("block");
        }
    }

    useEffect(() =>  {
        profile();
    });

    function clickHandler() {
        setIsToggle(!isToggle)
    }

    return React.createElement(
        'img',
        {
            className: "w-[35px] h-[35px] rounded-[5rem] cursor-pointer float-right mb-2",
            id: "img-profile",
            src: "./matthew.png",
            onClick: clickHandler
        },
    );
}

class BoxInfoAccountBtn extends React.Component {
    render() {
        return React.createElement(
            'ul',
            {
                className: "font-medium bg-gradient-to-r from-sky-500 to-blue-700 rounded clear-right hidden relative pl-0 list-none left:-40% mb-0 text-left text-gray-700",
                id: "menus",
            },
            React.createElement(TitleJobInfoAccountBtn),
            React.createElement(SettingsMenuInfoAccountBtn),
            React.createElement(InboxMenuInfoAccountBtn),
            React.createElement(ProfileMenuInfoAccountBtn),
            React.createElement(LogoutMenuInfoAccountBtn)
        );
    }
}

class TitleJobInfoAccountBtn extends React.Component {
    render() {
        return React.createElement(
              'li',
            {
                className: "cursor-default text-center py-[15px] cursor-normal",
            },
            React.createElement(TitleMenuInfoAccountBtn),
            React.createElement(JobMenuInfoAccountBtn)
        );
    }
}

class TitleMenuInfoAccountBtn extends React.Component {
    render() {
        return React.createElement(
            'div',
            {
                className: "font-bold",
            },
            "Joen The Goes"
        );
    }
}

class JobMenuInfoAccountBtn extends React.Component {
    render() {
        return React.createElement(
            "div",
            null,
            "Asistant Manager"
        );
    }
}

class SettingsMenuInfoAccountBtn extends React.Component {
    render() {
        return React.createElement(
            'li',
            {
                className: "duration-500 ease-in-out hover:tracking-widest hover:bg-blue-100 hover:text-sky-500 cursor-pointer break-all py-2 p-[5px]"
            },
            React.createElement(ImageSettingsMenuInfoAccountBtn),
            "Settings"
        );
    }
}

class ImageSettingsMenuInfoAccountBtn extends React.Component {
    render() {
        return React.createElement(
            'i',
            {
                className: "mx-4 fa fa-cog",
                "aria-hidden": "true"
            },
        );
    }
}

class InboxMenuInfoAccountBtn extends React.Component {
    render() {
        return React.createElement(
            'li',
            {
                className: "duration-500 ease-in-out hover:tracking-widest hover:bg-blue-100 hover:text-sky-500 cursor-pointer break-all py-2 p-[5px]"
            },
            React.createElement(ImageInboxMenuInfoAccountBtn),
            "Inbox"
        );
    }
}

class ImageInboxMenuInfoAccountBtn extends React.Component {
    render() {
        return React.createElement(
            'i',
            {
                className: "mx-4 fa fa-envelope",
                "aria-hidden": "true"
            },
        );
    }
}

class ProfileMenuInfoAccountBtn extends React.Component {
    render() {
        return React.createElement(
            'li',
            {
                className: "duration-500 ease-in-out hover:tracking-widest hover:bg-blue-100 hover:text-sky-500 cursor-pointer break-all py-2 p-[5px]"
            },
            React.createElement(ImageProfileMenuInfoAccountBtn),
            "Profile"
        );
    }
}

class ImageProfileMenuInfoAccountBtn extends React.Component {
    render() {
        return React.createElement(
            'i',
            {
                className: "mx-4 fa fa-user",
                "aria-hidden": "true",
            },
        );
    }
}

class LogoutMenuInfoAccountBtn extends React.Component {
    render() {
        return React.createElement(
            'li',
            {
                className: "duration-500 ease-in-out hover:tracking-widest hover:bg-blue-100 hover:text-sky-500 cursor-pointer break-all py-2 p-[5px]"
            },
            React.createElement(ImageLogoutMenuInfoAccountBtn),
            "Logout"
        );
    }
}

class ImageLogoutMenuInfoAccountBtn extends React.Component {
    render() {
        return React.createElement(
            'i',
            {
                className: "mx-4 fa fa-lock",
                "aria-hidden": "true"
            },
        );
    }
}

export { BtnToggleNaviagtion, InfoAccountBtn, TitleJobInfoAccountBtn, SettingsMenuInfoAccountBtn }