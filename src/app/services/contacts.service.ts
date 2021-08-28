import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor() { }

  getContacts()  {
    return  [

      {
        id: 1,
        test: 'metis',
        icon: 'apothecom',
        name: 'I collaborated with a geographically-distributed team consisting of stakeholders and the development, design, and UX leads on a Roche interactive medical tool built with Angular, Typescript, and styled using a custom Angular Material theme, SCSS, Bootstrap Utilities, and Flexbox.',
        phone: '#0539f7',
        city:
          [
            {
              id: '1',
              icon: 'fab fa-angular',
              name: 'angular / material'
            },
        ],
      },
    ];
  }
}
