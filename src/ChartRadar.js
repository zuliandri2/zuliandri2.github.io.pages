import React from 'react';
import {Radar} from "react-chartjs-2";

class CanvasChartRadar extends React.Component {
    render() {
        return React.createElement(
            Radar,
            {
                id: "myChart4",
                className: "border-b-2 border-solid border-b-blue-400",
                data: {
                    labels: [
                        'Eating',
                        'Drinking',
                        'Sleeping',
                        'Designing',
                        'Coding',
                        'Cycling',
                        'Running'
                    ],
                    datasets: [{
                        label: 'My First Dataset',
                        data: [65, 59, 90, 81, 56, 55, 40],
                        fill: true,
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgb(255, 99, 132)',
                        pointBackgroundColor: 'rgb(255, 99, 132)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgb(255, 99, 132)'
                    }, {
                        label: 'My Second Dataset',
                        data: [28, 48, 40, 19, 96, 27, 100],
                        fill: true,
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgb(54, 162, 235)',
                        pointBackgroundColor: 'rgb(54, 162, 235)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgb(54, 162, 235)'
                    }]
                },
                options: {
                    elements: {
                        line: {
                            borderWidth: 3
                        }
                    }
                },
            }
        );
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