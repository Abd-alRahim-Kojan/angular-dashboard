import { Component, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexPlotOptions,
  ApexFill,
  ApexDataLabels,
  ApexYAxis,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  plotOptions: ApexPlotOptions;
  dataLabels: ApexDataLabels;
  colors: any;
};

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
})
export class GraphComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Sales',
          data: [260, 140, 190, 230, 140],
        },
      ],
      chart: {
        height: 300,
        type: 'bar',
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        categories: [
          'Station Name 1',
          'Station Name 2',
          'Station Name 3',
          'Station Name 4',
          'Station Name 5',
        ],
      },
      yaxis: {
        min: 0,
        max: 300,
        tickAmount:6,
      },
      plotOptions: {
        bar: {
          columnWidth: '5%',
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: ['#ff7f5c'],
    };
  }
}
