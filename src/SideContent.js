import React, { useContext } from 'react';
import {BtnToggleNaviagtion, InfoAccountBtn} from "./topHeader";
import {CreateHomeBreadcrumbs, HomeBreadcrumbs} from "./breadcumb";
import {ChildBoxContentChartBar} from "./ChartBar";
import {ChildBoxContentChartBubble} from "./ChartBubble";
import {ChildBoxContentChartDoughnut} from "./ChartDoughnut";
import MapContent from "./Mapping";
import {ChildBoxContentChartRadar} from "./ChartRadar";
import {navigationToggle} from "./navigationToggle";


function HeaderMenu() {
    const actionToggle = useContext(navigationToggle);
    const widthHeader = actionToggle.action.widthHeader;

    return React.createElement(
        'div',
        {
                className: "top-0 fixed p-2.5 border-b-neutral-200 border-b-solid border-b-thin shadow-[10px_2px_10px_rgb(229,229,229)] bg-white " + widthHeader,
                id: "header-menu"
            },
            React.createElement(BtnToggleNaviagtion),
            React.createElement(InfoAccountBtn, null)
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

class BoxContent extends React.Component {
    render() {
        return React.createElement(
            'div',
            {className: "grid grid-cols-2 gap-4"},
            React.createElement(ChildBoxContentChartBar),
            React.createElement(ChildBoxContentChartBubble),
            React.createElement(ChildBoxContentChartDoughnut),
            React.createElement(ChildBoxContentChartRadar),
            React.createElement(MapContent)
        );
    }
}

class Content extends React.Component {
    render() {
        return React.createElement(
            'div',
            { className: "m-3" },
            React.createElement(BoxContent),
        )
    }
}

function SideContent() {
    const actionToggle = useContext(navigationToggle);
    const marginLeft = actionToggle.action.marginLeft;

    return React.createElement(
        'div',
        { className: "text-sky-500 " + marginLeft, id: "side-content"},
        React.createElement(HeaderMenu),
        React.createElement(BreadCrumbs)
    );
}

export default SideContent;