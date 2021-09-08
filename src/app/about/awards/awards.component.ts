import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';
import { TextDetails } from './../../ui/details/types';
@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent implements OnInit {

  details: TextDetails[] = [
    {
      header: 'awards.',
      header1: '',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolorcat cupidatat non proident.'
    }
  ];

  awards: { id: any; icon: any; name: any; source: any; year: any;}[] = [];

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.awards = this.dataService.getAwards();
  }
}
