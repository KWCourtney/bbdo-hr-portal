import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AboutComponent, AwardsComponent,  BbdoRoomsComponent, BenefitsPayrollComponent, ContactComponent, EducationComponent, EmployeeStockComponent, HistoryComponent, HolidayScheduleComponent, IdTagsComponent, HomeComponent, NewParentComponent, OasysComponent, PaigeComponent, PeopleComponent, ReachComponent, ResourcesComponent, WifiComponent } from './index';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'awards', component: AwardsComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'benefits-payroll', component: BenefitsPayrollComponent },
  { path: 'education', component: EducationComponent },
  { path: 'employee-stock', component: EmployeeStockComponent },
  { path: 'new-parent', component: NewParentComponent },
  { path: 'oasys', component: OasysComponent },
  { path: 'reach', component: ReachComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: HomeComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'holiday-schedule', component: HolidayScheduleComponent },
  { path: 'wifi', component: WifiComponent },
  { path: 'bbdo-rooms', component: BbdoRoomsComponent },
  { path: 'id-tags', component: IdTagsComponent },
  { path: 'paige', component: PaigeComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
