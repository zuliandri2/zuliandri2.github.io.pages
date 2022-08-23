"use strict";

import { Dashboard } from "./dashboard";
import {LoadingSpinner} from "./spinner-loading";
import React, { useState, useEffect } from 'react';
import ReactDom from "react-dom/client";
import {MenuNavigations} from "./menuNavigations";
import SideContent from "./SideContent";
import {navigationToggle, toggleNavigation} from "./navigationToggle";
import {BrowserRouter} from "react-router-dom";

(function () {
    const root = ReactDom.createRoot(document.getElementById("root"));

    class ToggleView extends React.Component {

        constructor(props) {
            super(props);
            this.toggleNavigation = this.toggleNavigation.bind(this);

            this.state = {
                action: toggleNavigation.show,
                toggle: this.toggleNavigation
            };
        }

        toggleNavigation() {
            this.setState(function (state) {
                if (state.action === toggleNavigation.show) {
                    return { action: toggleNavigation.hide };
                } else {
                    return { action: toggleNavigation.show };
                }
            });
        }

        render() {
            return React.createElement(
                navigationToggle.Provider,
                { value: this.state },
                React.createElement(Wrapping)
            );
        }
    }

    function Wrapping() {
        return React.createElement(
            BrowserRouter,
            null,
            React.createElement(
                React.Fragment,
                null,
                React.createElement(MenuNavigations),
                React.createElement(SideContent)
            )
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