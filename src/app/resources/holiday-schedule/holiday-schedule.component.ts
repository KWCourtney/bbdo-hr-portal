import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';
import { TextDetails } from './../../ui/details/types';
@Component({
  selector: 'app-holiday-schedule',
  templateUrl: './holiday-schedule.component.html',
  styleUrls: ['./holiday-schedule.component.scss']
})
export class HolidayScheduleComponent implements OnInit {

  details: TextDetails[] = [
    {
      header: 'holiday',
      header1: 'schedule.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolorcat cupidatat non proident.'
    }
  ];

  holidays: {id: any; name: any; day: any; date: any;}[] = [];

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.holidays = this.dataService.getHolidays();
  }

}
