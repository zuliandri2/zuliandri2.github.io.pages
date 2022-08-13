"use strict";

import { Dashboard } from "./dashboard";
import {LoadingSpinner} from "./spinner-loading";
import React, { useState, useEffect } from 'react';
import ReactDom from "react-dom/client";
import {chart1, chart2, chart3, chart4} from "./chartStyles";
import {MenuNavigations} from "./menuNavigations";
import SideContent from "./SideContent";
import {navigationToggle, toggleNavigation} from "./navigationToggle";

(function () {
    const root = ReactDom.createRoot(document.getElementById("root"));

    function ToggleView() {
        const setToggleNavigation = function() {
            if (properties.action === toggleNavigation.show) {
                setToggleHide();
            } else {
                setToggleShow();
            }
        };

        useEffect(function() {
            console.log(properties);
        });

        const initState = {
            action: toggleNavigation.show,
            event: setToggleNavigation
        };
        const [properties, setProperties] = useState(initState);

        function setToggleShow() {
            setProperties(function () {
                return initState;
            });
        }

        function setToggleHide() {
            setProperties(function () {
                return {
                    action: toggleNavigation.hide,
                    event: setToggleNavigation
                };
            });
        }

        return React.createElement(
            navigationToggle.Provider,
            { value: properties },
            React.createElement(Wrapping)
        );
    }

    function Wrapping() {
        return React.createElement(
            React.Fragment,
            null,
            React.createElement(MenuNavigations),
            React.createElement(SideContent)
        );
    }

    root.render(
        React.createElement(
            React.StrictMode,
            null,
            React.createElement(
                React.Fragment,
                null,
                React.createElement(LoadingSpinner),
                React.createElement(ToggleView),
            )
        )
    );

    window.dashLoad = Dashboard();
})();