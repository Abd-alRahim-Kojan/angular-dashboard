import { Component } from '@angular/core';
import { faChartSimple, faListUl } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  cards = [
    {
      title: '71,028',
      unit: 'EGP',
      label: 'Total Value',
      num: '20',
      unit2: '%',
      arrow: 'down',
    },
    {
      title: '20,000',
      unit: 'm',
      miniUnit: '3',
      label: 'Total Sales',
      num: '50',
      unit2: 'm',
      miniUnit2: '3',
      arrow: 'up',
    },
    {
      title: '20,000',
      unit: 'm',
      miniUnit: '3',
      label: 'Avg Sales',
      num: '50',
      unit2: 'm',
      miniUnit2: '3',
      arrow: 'down',
    },
    {
      title: '1567',
      label: 'Total Transaction Count',
      num: '50',
      unit2: 'm',
      miniUnit2: '3',
      arrow: 'up',
    },
  ];

  faChartSimple = faChartSimple;
  faListUl = faListUl;
}
