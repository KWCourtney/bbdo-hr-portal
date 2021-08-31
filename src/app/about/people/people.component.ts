import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  header = 'People.';
  header1 = '';
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolorcat cupidatat non proident.';
  background = 'people.number';

  people: {id: any; number: any; align: any; color: any; text01: any; text02: any; text03: any; icon: any;}[] = [];
  // selectedAward: any;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.people = this.dataService.getPeople();
  }
}
