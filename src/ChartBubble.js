import React from 'react';
import {chart2} from "./chartStyles";

class CanvasChartBubble extends React.Component {

    componentDidMount() {
        chart2();
    }

    render() {
        return React.createElement('div', { id: "myChart2", className: "border-b-2 border-solid border-b-blue-400" })
    }
}

class TitleChildContentChartBubble extends React.Component {
    render() {
        return React.createElement('div', {className: "mb-7 font-medium"}, "Chart Bubble");
    }
}

class ChildBoxContentChartBubble extends React.Component {
    render() {
        return React.createElement(
            'div',
            {className: "p-5"},
            React.createElement(TitleChildContentChartBubble),
            React.createElement(CanvasChartBubble)
        );
    }
}

export { CanvasChartBubble, TitleChildContentChartBubble, ChildBoxContentChartBubble };