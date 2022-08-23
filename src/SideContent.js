import React from 'react';
import {BtnToggleNaviagtion, InfoAccountBtn} from "./topHeader";
import {CreateHomeBreadcrumbs, HomeBreadcrumbs} from "./breadcumb";
import {navigationToggle} from "./navigationToggle";
import {Route, Routes} from "react-router-dom";
import {BoxContent} from "./contents/home";
import {TablesBox} from "./btnMenus";
import {TablesContents} from "./contents/tables";


function HeaderMenu() {
    return React.createElement(
        navigationToggle.Consumer,
        null,
        function ({action, toggle}) {
            return React.createElement(
                'div',
                {
                    className: "top-0 fixed p-2.5 border-b-neutral-200 border-b-solid border-b-thin shadow-[10px_2px_10px_rgb(229,229,229)] bg-white " + action.widthHeader,
                    id: "header-menu"
                },
                React.createElement(BtnToggleNaviagtion),
                React.createElement(InfoAccountBtn, null))
        }
    );
}

class BreadCrumbs extends React.Component {
    render() {
        return React.createElement(
            'div',
            {id: "breadcumb", className: "font-medium px-7 py-5 mt-14" },
            React.createElement(HomeBreadcrumbs, null),
            " \\ ",
            React.createElement(CreateHomeBreadcrumbs, null)
        );
    }
}

class Content extends React.Component {
    render() {
        return React.createElement(
            'div',
            { className: "m-3" },
            React.createElement(
                Routes,
                null,
                React.createElement(
                    Route,
                    {
                        path:"/",
                        element: React.createElement(BoxContent, null)
                    },
                ),
                React.createElement(
                    Route,
                    {
                        path: "/table",
                        element: React.createElement(TablesContents, null),
                    }
                ),
            )
            ,
        )
    }
}

function SideContent() {
    return React.createElement(
        navigationToggle.Consumer,
        null,
        function ({action, toggle}) {
            return React.createElement(
                'div',
                { className: "text-sky-500 " + action.marginLeft, id: "side-content"},
                React.createElement(HeaderMenu),
                React.createElement(BreadCrumbs),
                React.createElement(Content),
            );
        }
    );
}

export default SideContent;