"use strict";

import React from 'react';


class LinkTitle extends React.Component {
    render() {
        return React.createElement(
            "a",
            { href: "https://www.openstreetmap.org/#map=11/1.0902/103.9911" },
            "View Larger Map"
        );
    }
}

class ContentTitle extends React.Component {
    render() {
        return React.createElement("div", null, React.createElement(LinkTitle));
    }
}

class MapNewLine extends React.Component {
    render() {
        // return()
    }
}

/*class IframeMap extends React.Component {
    render() {
        return React.createElement(
            'iframe',
            {
                    className: "w-full",
                    height : "350",
                    frameBorder : "0",
                    scrolling : "no",
                    marginHeight : "0",
                    marginWidth : "0",
                    style: "border: 1px solid black",
                    src: "https://www.openstreetmap.org/export/embed.html?bbox=103.75762939453126%2C0.9144220047531721%2C104.22454833984376%2C1.2659203170470001&amp;layer=mapnik"
                }
        );
    }
}*/

class MapContent extends React.Component {
    render() {
        return React.createElement(
            'div',
            {className: "p-5 col-span-2"},
            React.createElement(ContentTitle)
        );
    }
}

export default MapContent;