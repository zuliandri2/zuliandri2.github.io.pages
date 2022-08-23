import React from 'react';
import { Bubble } from "react-chartjs-2";

class CanvasChartBubble extends React.Component {
    render() {
        return React.createElement(
            Bubble,
            {
                id: "myChart2",
                className: "border-b-2 border-solid border-b-blue-400",
                data: {
                    datasets: [{
                        label: 'First Dataset',
                        data: [{
                            x: 20,
                            y: 30,
                            r: 15
                        }, {
                            x: 40,
                            y: 10,
                            r: 10
                        }],
                        backgroundColor: 'rgb(255, 99, 132)'
                    }]
                }
            }
        );
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