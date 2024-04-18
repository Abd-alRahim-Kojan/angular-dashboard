import { Component, Renderer2, ElementRef } from '@angular/core';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  faEllipsis = faEllipsis;
  // dropdownOpen = false;

  companies = [
    {
      name: 'Company Name 1',
      dropdownOpen: false,
      items: [
        { name: 'Total Sales', value: '6271', unit: 'm', miniUnit: '3' },
        { name: 'Compression State', value: 'Compression' },
        { name: 'Max Transaction / hour', value: '20' },
        { name: 'Total Value', value: '550', unit: 'EGP' },
        { name: 'Total Transaction Count', value: '5161' },
        { name: 'Max Transaction Date-Time', value: '8-1-2021 | 10:16 PM' },
      ],
    },
    {
      name: 'Company Name 2',
      dropdownOpen: false,
      items: [
        { name: 'Total Sales', value: '6271', unit: 'm', miniUnit: '3' },
        { name: 'Compression State', value: 'Compression' },
        { name: 'Max Transaction / hour', value: '20' },
        { name: 'Total Value', value: '550', unit: 'EGP' },
        { name: 'Total Transaction Count', value: '5161' },
        { name: 'Max Transaction Date-Time', value: '8-1-2021 | 10:16 PM' },
      ],
    },
    {
      name: 'Company Name 3',
      dropdownOpen: false,
      items: [
        { name: 'Total Sales', value: '6271', unit: 'm', miniUnit: '3' },
        { name: 'Compression State', value: 'Compression' },
        { name: 'Max Transaction / hour', value: '20' },
        { name: 'Total Value', value: '550', unit: 'EGP' },
        { name: 'Total Transaction Count', value: '5161' },
        { name: 'Max Transaction Date-Time', value: '8-1-2021 | 10:16 PM' },
      ],
    },
    {
      name: 'Company Name 4',
      dropdownOpen: false,
      items: [
        { name: 'Total Sales', value: '6271', unit: 'm', miniUnit: '3' },
        { name: 'Compression State', value: 'Compression' },
        { name: 'Max Transaction / hour', value: '20' },
        { name: 'Total Value', value: '550', unit: 'EGP' },
        { name: 'Total Transaction Count', value: '5161' },
        { name: 'Max Transaction Date-Time', value: '8-1-2021 | 10:16 PM' },
      ],
    },
    {
      name: 'Company Name 5',
      dropdownOpen: false,
      items: [
        { name: 'Total Sales', value: '6271', unit: 'm', miniUnit: '3' },
        { name: 'Compression State', value: 'Compression' },
        { name: 'Max Transaction / hour', value: '20' },
        { name: 'Total Value', value: '550', unit: 'EGP' },
        { name: 'Total Transaction Count', value: '5161' },
        { name: 'Max Transaction Date-Time', value: '8-1-2021 | 10:16 PM' },
      ],
    },
  ];

  toggleDropdown(selectedCompany: any) {
    // Close all dropdowns
    this.companies.forEach((company) => {
      company.dropdownOpen = false;
    });
    selectedCompany.dropdownOpen = !selectedCompany.dropdownOpen;
    // Open the selected dropdown
  }

  // Close all dropdowns when click outside the list section
  constructor(private renderer: Renderer2, private el: ElementRef) {}
  ngOnInit() {
  this.renderer.listen('window', 'click', (e: Event) => {
    if (!this.el.nativeElement.contains(e.target)) {
      this.companies.forEach((company) => {
        company.dropdownOpen = false;
      });
    }
  });
}

}
