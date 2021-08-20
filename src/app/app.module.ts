import { FooterComponent } from './ui/footer/footer.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutComponent, HomeComponent, AwardsComponent, HistoryComponent, PeopleComponent, BenefitsPayrollComponent, ContactComponent, EducationComponent, EmployeeStockComponent, NewParentComponent, ResourcesComponent, WifiComponent, HolidayScheduleComponent, HeaderComponent,} from './index';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    AwardsComponent,
    HistoryComponent,
    PeopleComponent,
    BenefitsPayrollComponent,
    ContactComponent,
    EducationComponent,
    EmployeeStockComponent,
    NewParentComponent,
    ResourcesComponent,
    WifiComponent,
    HolidayScheduleComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
