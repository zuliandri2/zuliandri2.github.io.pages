import React from 'react';
import {Bar} from 'react-chartjs-2';


class CanvasChartBar extends React.Component {

    render() {

        return React.createElement(
            Bar,
            {
                id: "myChart1",
                className: "border-b-2 border-solid border-b-blue-400",
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                },
                data: {
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                }
            }
        );
    }

}

class TitleChildContentChartBar extends React.Component {
    render() {
        return React.createElement('div', {className: "mb-7 font-medium"}, "Chart BAR");
    }
}

export class ChildBoxContentChartBar extends React.Component {
    render() {
        return React.createElement(
            'div',
            {className: "p-5"},
            React.createElement(TitleChildContentChartBar),
            React.createElement(CanvasChartBar)
        );
    }
}