import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import {AboutComponent, AwardsComponent,  BenefitsPayrollComponent, ContactComponent, EducationComponent, EmployeeStockComponent, FooterComponent, HeaderComponent, HistoryComponent, HolidayScheduleComponent, HomeComponent, NewParentComponent, PeopleComponent, ResourcesComponent, WifiComponent} from './index';
@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    AwardsComponent,
    BenefitsPayrollComponent,
    ContactComponent,
    EducationComponent,
    EmployeeStockComponent,
    FooterComponent,
    HeaderComponent,
    HistoryComponent,
    HolidayScheduleComponent,
    HomeComponent,
    NewParentComponent,
    PeopleComponent,
    ResourcesComponent,
    WifiComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
