import React from 'react';
import {Doughnut} from "react-chartjs-2";


class CanvasChartDoughnut extends React.Component {
    render() {
        return React.createElement(
            Doughnut,
            {
                id: "myChart3",
                className: "border-b-2 border-solid border-b-blue-400",
                data: {
                    labels: [
                        'Red',
                        'Blue',
                        'Yellow'
                    ],
                    datasets: [{
                        label: 'My First Dataset',
                        data: [20, 10, 30],
                        backgroundColor: [
                            'rgb(255, 99, 132)',
                            'rgb(54, 162, 235)',
                            'rgb(255, 205, 86)'
                        ],
                        hoverOffset: 4
                    }]
                }
            }
        );
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