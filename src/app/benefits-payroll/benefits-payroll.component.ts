import { Component, OnInit } from '@angular/core';
import { DataService } from './../services/data.service';
@Component({
  selector: 'app-benefits-payroll',
  templateUrl: './benefits-payroll.component.html',
  styleUrls: ['./benefits-payroll.component.scss']
})
export class BenefitsPayrollComponent implements OnInit {

  header = 'Benefits &';
  header1 = 'Payroll.';
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolorcat cupidatat non proident.';

  benefits: {id: any; icon: any; name: any; text: any; link: any;}[] = [];
  // selectedAward: any;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.benefits = this.dataService.getBenefits();
  }

  // public selectAward(award: any){
  //   this.selectedAward = award;
  // }

}
