import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AboutComponent, AwardsComponent, HistoryComponent, PeopleComponent, BenefitsPayrollComponent, EducationComponent, EmployeeStockComponent, NewParentComponent, ContactComponent, HomeComponent, ResourcesComponent, WifiComponent, HolidayScheduleComponent } from './index';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent ,
    children: [
      { path: 'awards', component: AwardsComponent },
      { path: 'history', component: HistoryComponent },
      { path: 'people', component: PeopleComponent },
    ]
  },
  { path: 'benefits-payroll', component: BenefitsPayrollComponent,
    children: [
      { path: 'education', component: EducationComponent },
      { path: 'employee-stock', component: EmployeeStockComponent },
      { path: 'new-parent', component: NewParentComponent },
    ]
  },
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: HomeComponent },
  { path: 'resources', component: ResourcesComponent,
    children: [
      { path: 'holiday-schedule', component: HolidayScheduleComponent },
      { path: 'wifi', component: WifiComponent },
    ]
  },

];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
