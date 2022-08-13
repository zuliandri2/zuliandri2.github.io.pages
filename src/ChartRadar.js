import React from 'react';
import {chart4} from "./chartStyles";

class CanvasChartRadar extends React.Component {

    componentDidMount() {
        chart4();
    }

    render() {
        return React.createElement('div', { id: "myChart4", className: "border-b-2 border-solid border-b-blue-400" })
    }
}

class TitleChildContentChartRadar extends React.Component {
    render() {
        return React.createElement('div', {className: "mb-7 font-medium"}, "Chart Radar");
    }
}

class ChildBoxContentChartRadar extends React.Component {
    render() {
        return React.createElement(
            'div',
            {className: "p-5"},
            React.createElement(TitleChildContentChartRadar),
            React.createElement(CanvasChartRadar)
        );
    }
}

export { CanvasChartRadar, TitleChildContentChartRadar, ChildBoxContentChartRadar };