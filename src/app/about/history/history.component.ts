import { Component } from '@angular/core';
import { TextDetails } from './../../ui/details/types';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {

  details: TextDetails[] = [
    {
      header: 'employee',
      header1: 'stock.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolorcat cupidatat non proident.'
    }
  ];

  // Timeline
  alternate: boolean = false;
  toggle: boolean = true;
  color: boolean = false;
  size: number = 30;
  expandEnabled: boolean = true;
  contentAnimation: boolean = true;
  dotAnimation: boolean = true;
  side = 'right';
  mobileWidthThreshold: number = 769;


  entries = [
    {
      header: 'George Batten opens agency.',
      content: 'George Batten opened his own advertising agency, Batten Company, in New York City.',
      year: '1893'
    },
    {
      header: 'Bruce Barton and Roy Durstine open agency.',
      content: 'Bruce Barton and Roy Durstine opened Barton & Durstine Co. agency. Later that year, Alex Osborn joined, renaming the agency Barton, Durstine & Osborn, BDO for short.',
      year: '1919'
    },
    {
      header: 'BBDO is born.',
      content: 'Batten Co. and BDO announced a merger to form Batten, Barton, Durstine & Osborn, known as BBDO.',
      year: '1928'
    },
    {
      header: 'Alex Osborn creates brainstorming.',
      content: 'In an attempt to help employees generate creative ideas individually, Alex Osborn began hosting group-thinking sessions technique he named Brainstorming.',
      year: '1940'
    },
    {
      header: 'Omincom is born.',
      content: 'Omnicom was formed from the merger between BBDO and DDB Needham, spearheaded by BBDO Worldwide CEO Allen Rosenshine.',
      year: '1986'
    },
    {
      header: 'BBDO wins Agency of the Year.',
      content: 'BBDO was selected Agency  of the Year by both Adweek and Advertising Age.',
      year: '1994'
    },
    {
      header: 'Andrew Robertson ascends to the top of BBDO.',
      content: 'Andrew Robertson was named President and CEO of BBDO Worldwide, appointing David Lubars as Chief Creative Officer.',
      year: '2004'
    },
    {
      header: 'Bloomberg creates BBDO Day.',
      content: 'Mayor Bloomberg named January 10 BBDO Day',
      year: '2004'
    },
    {
      header: 'BBDO Worldwide.',
      content: 'BBDO Worldwide is 15,000 people in 289 agencies across 81 countries, all maniacally focused on the work, the work, the work.',
      year: '2006'
    }
  ]

  addEntry() {
    this.entries.push({
      header: 'header',
      content: 'content',
      year: 'year'
    })
  }

  removeEntry() {
    this.entries.pop();
  }

  onHeaderClick(event: { stopPropagation: () => void; }) {
    if (!this.expandEnabled) {
      event.stopPropagation();
    }
  }

  onDotClick(event: { stopPropagation: () => void; }) {
    if (!this.expandEnabled) {
      event.stopPropagation();
    }
  }

  onExpandEntry(expanded: any, index: any) {
    console.log(`Expand status of entry #${index} changed to ${expanded}`)
  }

  toggleSide() {
    this.side = this.side === 'left' ? 'right' : 'left';
  }

}
