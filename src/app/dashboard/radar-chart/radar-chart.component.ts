import { Component, ViewChild } from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexFill,
  ChartComponent,
  ApexStroke,
  ApexMarkers,
  ApexLegend,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  stroke: ApexStroke;
  fill: ApexFill;
  markers: ApexMarkers;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  legend: ApexLegend;
};

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.scss'],
})
export class RadarChartComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Series Blue',
          data: [80, 70, 60, 70, 80, 90, 80, 70, 60, 50, 40, 50],
        },
        {
          name: 'Series Green',
          data: [30, 40, 50, 60, 70, 70, 90, 100, 90, 80, 70, 60],
        },
      ],
      chart: {
        height: 250,
        type: 'radar',
        dropShadow: {
          enabled: true,
          blur: 0.5,
          left: 1,
          top: 1,
        },
        toolbar: {
          show: false,
        },
      },
      stroke: {
        width: 1,
      },
      fill: {
        opacity: 0.1,
      },
      markers: {
        size: 0,
      },
      xaxis: {
        categories: [
          '24:00',
          '02:00',
          '04:00',
          '06:00',
          '08:00',
          '10:00',
          '12:00',
          '14:00',
          '16:00',
          '18:00',
          '20:00',
          '22:00',
        ],
        labels: {
          show: true,
          style: {
            colors: ['#8D8F96'],
            fontSize: '10px',
            fontFamily: 'Futura PT',
          },
        },
      },
      yaxis: {
        show: false,
        labels: {
          show: false,
        },
      },
      legend: {
        show: false,
      },
    };
  }
}
