import { Injectable, EventEmitter } from '@angular/core';



const accordionEntries: any[] = [
  { title: 'title 1dd', content: 'content 1' },
  { title: 'title 2dd', content: 'content 2' },
  { title: 'title 3dd', content: 'content 3' },
  { title: 'title 4dd', content: 'content 4' }
];

@Injectable({
  providedIn: 'root'
})

export class AccordionService {

  onEntryClick = new EventEmitter();
  entries: any[] = accordionEntries;
  constructor() {}

  collapseAllEntries() {
    this.onEntryClick.emit();
  }

}
