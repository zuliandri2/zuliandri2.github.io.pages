import {ChildBoxContentChartBar} from "../ChartBar";
import React from "react";
import {ChildBoxContentChartBubble} from "../ChartBubble";
import {ChildBoxContentChartDoughnut} from "../ChartDoughnut";
import {ChildBoxContentChartRadar} from "../ChartRadar";
import MapContent from "../Mapping";
import {Chart, ArcElement, LineElement, BarElement, PointElement, BarController, BubbleController, DoughnutController, LineController, PieController, PolarAreaController, RadarController, ScatterController, CategoryScale, LinearScale, LogarithmicScale, RadialLinearScale, TimeScale, TimeSeriesScale, Decimation, Filler, Legend, Title, Tooltip} from "chart.js";

export class BoxContent extends React.Component {
    render() {
        Chart.register(ArcElement, LineElement, BarElement, PointElement, BarController, BubbleController, DoughnutController, LineController, PieController, PolarAreaController, RadarController, ScatterController, CategoryScale, LinearScale, LogarithmicScale, RadialLinearScale, TimeScale, TimeSeriesScale, Decimation, Filler, Legend, Title, Tooltip);

        return React.createElement(
            'div',
            {className: "grid grid-cols-2 gap-4"},
            React.createElement(ChildBoxContentChartBar),
            React.createElement(ChildBoxContentChartBubble),
            React.createElement(ChildBoxContentChartDoughnut),
            React.createElement(ChildBoxContentChartRadar),
            React.createElement(MapContent)
        );
    }
}