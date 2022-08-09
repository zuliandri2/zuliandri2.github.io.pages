import React from 'react';

class HomeBreadcrumbs extends React.Component {
    render() {
        return React.createElement(
            'a',
            {href: "#", className: "hover:tracking-wide"},
            "Home"
        );
    }
}

class CreateHomeBreadcrumbs extends React.Component {

    render() {
        return React.createElement(
            'a',
            {href: "#", className: "hover:tracking-wide"},
            "Create"
        );
    }
}

class TablesBreadcrumbs extends React.Component {
    render() {
        return React.createElement(
            'a',
            {href: "#", className: "hover:tracking-wide"},
            "Tables"
        );
    }
}

export {HomeBreadcrumbs, CreateHomeBreadcrumbs, TablesBreadcrumbs}