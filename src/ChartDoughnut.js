import React from 'react';
import {chart3} from "./chartStyles";

class CanvasChartDoughnut extends React.Component {

    componentDidMount() {
        chart3();
    }

    render() {
        return React.createElement('div', { id: "myChart3", className: "border-b-2 border-solid border-b-blue-400" })
    }
}

class TitleChildContentChartDoughnut extends React.Component {
    render() {
        return React.createElement('div', {className: "mb-7 font-medium"}, "Chart Doughnut");
    }
}

class ChildBoxContentChartDoughnut extends React.Component {
    render() {
        return React.createElement(
            'div',
            {className: "p-5"},
            React.createElement(TitleChildContentChartDoughnut),
            React.createElement(CanvasChartDoughnut)
        );
    }
}

export { CanvasChartDoughnut, TitleChildContentChartDoughnut, ChildBoxContentChartDoughnut };