import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';
import { TextDetails } from './../../ui/details/types';
@Component({
  selector: 'app-wifi',
  templateUrl: './wifi.component.html',
  styleUrls: ['./wifi.component.scss']
})
export class WifiComponent implements OnInit {

  details: TextDetails[] = [
    {
      header: 'wifi.',
      header1: '',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolorcat cupidatat non proident.'
    }
  ];

  wifi: {id: any; icon: any; city: any; network: any; networkText: any; password: any; passwordText: any;}[] = [];

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.wifi = this.dataService.getWifi();
  }

}
