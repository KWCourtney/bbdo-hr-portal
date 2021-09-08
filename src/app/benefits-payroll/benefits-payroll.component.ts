import { Component, OnInit } from '@angular/core';
import { DataService } from './../services/data.service';
import { TextDetails } from './../ui/details/types';
@Component({
  selector: 'app-benefits-payroll',
  templateUrl: './benefits-payroll.component.html',
  styleUrls: ['./benefits-payroll.component.scss']
})
export class BenefitsPayrollComponent implements OnInit {

  details: TextDetails[] = [
    {
      header: 'benefits &',
      header1: 'payroll.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolorcat cupidatat non proident.'
    }
  ];

  benefits: {id: any; icon: any; name: any; text: any; link: any; target: any;}[] = [];

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.benefits = this.dataService.getBenefits();
  }
}
