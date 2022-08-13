import React from 'react';
import {chart1} from "./chartStyles";

class CanvasChartBar extends React.Component {

    componentDidMount() {
        chart1();
    }

    render() {
        return React.createElement('div', { id: "myChart1", className: "border-b-2 border-solid border-b-blue-400" })
    }
}

class TitleChildContentChartBar extends React.Component {
    render() {
        return React.createElement('div', {className: "mb-7 font-medium"}, "Chart BAR");
    }
}

class ChildBoxContentChartBar extends React.Component {
    render() {
        return React.createElement(
            'div',
            {className: "p-5"},
            React.createElement(TitleChildContentChartBar),
            React.createElement(CanvasChartBar)
        );
    }
}

export { CanvasChartBar, TitleChildContentChartBar, ChildBoxContentChartBar };