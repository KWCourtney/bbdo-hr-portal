import { Component } from '@angular/core';
import { Tab } from './tab';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  header = 'Contact';
  header1 = 'Us.';
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolorcat cupidatat non proident.';

  tabs: Tab[] = [
    {
      title: 'ATL',
      active: true,
      iconBullet: 'contact-us-icon-bullet',
      iconEmail: 'contact-us-icon-email',
        items: [
          {
            id: '1',
            icon: 'contact-us-kevin',
            name: 'Kevin Booth',
            title: 'Training Manager',
            email: '#',
            phone: '404-841-1608',
            duties: [
              {
                dutyName: 'Paychecks',
              },
              {
                dutyName: 'Benefits',
              },
              {
                dutyName: 'Medical Leaves',
              }
            ]
          },
          {
            id: '2',
            icon: 'contact-us-saif',
            name: 'Saif James',
            title: 'HR Administrator',
            email: '#',
            phone: '404-841-1338',
            duties: [
              {
                dutyName: 'Timesheets',
              },
              {
                dutyName: 'Employment Verfication',
              },
              {
                dutyName: 'Time Off Balances',
              }
            ]

          },
          {
            id: '3',
            icon: 'contact-us-liberty',
            name: 'Liberty Barnes ',
            title: 'HR Coordinator',
            email: '#',
            phone: '404-841-1228',
            duties: [
              {
                dutyName: 'Recruiting',
              },
              {
                dutyName: 'Employee Relations',
              },
              {
                dutyName: 'Policies',
              }
            ]
          }
        ]
    },
    {
      title: 'NYC',
      active: false,
      iconBullet: 'contact-us-icon-bullet',
      iconEmail: 'contact-us-icon-email',
      items: [
        {
          id: '1',
          icon: 'contact-us-liberty',
          name: 'Liberty Barnes ',
          title: 'HR Coordinator',
          email: '#',
          phone: '404-841-1228',
          duties: [
            {
              dutyName: 'Recruiting',
            },
            {
              dutyName: 'Employee Relations',
            },
            {
              dutyName: 'Policies',
            }
          ]
        },
        {
          id: '2',
          icon: 'contact-us-kevin',
          name: 'Kevin Booth',
          title: 'Training Manager',
          email: '#',
          phone: '404-841-1608',
          duties: [
            {
              dutyName: 'Paychecks',
            },
            {
              dutyName: 'Benefits',
            },
            {
              dutyName: 'Medical Leaves',
            }
          ]
        },
        {
          id: '3',
          icon: 'contact-us-saif',
          name: 'Saif James',
          title: 'HR Administrator',
          email: '#',
          phone: '404-841-1338',
          duties: [
            {
              dutyName: 'Timesheets',
            },
            {
              dutyName: 'Employment Verfication',
            },
            {
              dutyName: 'Time Off Balances',
            }
          ]

        }
      ]
    },
    {
      title: 'SF',
      active: false,
      iconBullet: 'contact-us-icon-bullet',
      iconEmail: 'contact-us-icon-email',
      items: [
        {
          id: '1',
          icon: 'contact-us-kevin',
          name: 'Kevin Booth',
          title: 'Training Manager',
          email: '#',
          phone: '404-841-1608',
          duties: [
            {
              dutyName: 'Paychecks',
            },
            {
              dutyName: 'Benefits',
            },
            {
              dutyName: 'Medical Leaves',
            }
          ]
        },
        {
          id: '2',
          icon: 'contact-us-saif',
          name: 'Saif James',
          title: 'HR Administrator',
          email: '#',
          phone: '404-841-1338',
          duties: [
            {
              dutyName: 'Timesheets',
            },
            {
              dutyName: 'Employment Verfication',
            },
            {
              dutyName: 'Time Off Balances',
            }
          ]

        },
        {
          id: '3',
          icon: 'contact-us-liberty',
          name: 'Liberty Barnes ',
          title: 'HR Coordinator',
          email: '#',
          phone: '404-841-1228',
          duties: [
            {
              dutyName: 'Recruiting',
            },
            {
              dutyName: 'Employee Relations',
            },
            {
              dutyName: 'Policies',
            }
          ]
        }
      ]
    },
  ];
}
