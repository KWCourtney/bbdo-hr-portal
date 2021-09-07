import { Component, OnInit } from '@angular/core';
import { DataService } from './../services/data.service';
@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {

  header = 'Resources.';
  header1 = '';
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolorcat cupidatat non proident.';

  resources: {id: any; icon: any; name: any; text: any; link: any;}[] = [];
  // selectedAward: any;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.resources = this.dataService.getResources();
  }
}
