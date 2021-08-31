import { Component } from '@angular/core';
import { Config, Menu } from './../../ui/accordion/types';
@Component({
  selector: 'app-new-parent',
  templateUrl: './new-parent.component.html',
  styleUrls: ['./new-parent.component.scss']
})
export class NewParentComponent {

  header = 'new';
  header1 = 'parent.';
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolorcat cupidatat non proident.';

  // single open mode
  options: Config = { multi: false };

  menus: Menu[] = [
    {
      name: 'Lorem ipsum dolor sit amet, consectetur?',
      iconClass: 'fa fa-code',
      active: true,
      submenu: [
        { text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.', text2: 'See also: Lorem ipsum dolor sit amet' },
      ]
    },
    {
      name: 'Lorem ipsum dolor sit amet, consectetur?',
      iconClass: 'fa fa-mobile',
      active: false,
      submenu: [
        { text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.', text2: 'See also: Lorem ipsum dolor sit amet' },
      ]
    },
    {
      name: 'Lorem ipsum?',
      iconClass: 'fa fa-globe',
      active: false,
      submenu: [
        { text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.', text2: 'See also: Lorem ipsum dolor sit amet' },
      ]
    },
    {
      name: 'Lorem ipsum dolor sit amet?',
      iconClass: 'fa fa-globe',
      active: false,
      submenu: [
        { text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.', text2: 'See also: Lorem ipsum dolor sit amet' },
      ]
    },
    {
      name: 'Lorem ipsum dolor sit amet, consectetur?',
      iconClass: 'fa fa-globe',
      active: false,
      submenu: [
        { text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.', text2: 'See also: Lorem ipsum dolor sit amet' },
      ]
    }
  ];

}
