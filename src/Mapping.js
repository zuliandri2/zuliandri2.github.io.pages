"use strict";

import React from 'react';
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";


class LinkTitle extends React.Component {
    render() {
        return React.createElement(
            TileLayer,
            {
                attribution: '&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors',
                url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            }
        );
    }
}

class ContentTitle extends React.Component {
    render() {
        return React.createElement(
            MapContainer,
            {
                center: [-6.194416, 106.933269],
                zoom: 13,
                scrollWheelZoom: false,
                className: "h-80 z-[-1]",
            },
            React.createElement(LinkTitle),
            React.createElement(MarkerContent)
        );
    }
}

class MarkerContent extends React.Component {
    render() {
        return React.createElement(
            Marker,
            {
                position: [1.079761, 104.027999]
            },
            React.createElement(PopUpContent)
        );
    }
}

class PopUpContent extends React.Component{
    render() {
        return React.createElement(
            Popup,
            null,
            "A pretty CSS3 popup. <br /> easily costumable."
        );
    }
}

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