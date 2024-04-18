import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss'],
})
export class DropdownMenuComponent {
  checkboxItems = [
    { id: 'prop_0_0', label: 'Total sales' , checked: true},
    { id: 'prop_0_1', label: 'Max transaction count per hour' , checked: false},
    { id: 'prop_0_2', label: 'Total transaction' , checked: true},
    { id: 'prop_0_3', label: 'Max transaction count date-time' , checked: false},
    { id: 'prop_0_4', label: 'Total value' , checked: true},
    { id: 'prop_0_5', label: 'Compressor status' , checked: false},
  ];
}
