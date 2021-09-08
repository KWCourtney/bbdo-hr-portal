import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { NgModule } from '@angular/core';
import { TabsComponent } from './contact/tabs.component';

import {AboutComponent, AccordionComponent, AccordionItemComponent, AwardsComponent,  BenefitsPayrollComponent, ContactComponent, EducationComponent, EmployeeStockComponent, FooterComponent, HeaderComponent, HistoryComponent, HolidayScheduleComponent, HomeComponent, NewParentComponent, PeopleComponent, ResourcesComponent, WifiComponent} from './index';

// Service class
import {AccordionService} from './services/accordion.service';
import { DetailsComponent } from './ui/details/details.component';

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
    WifiComponent,
    TabsComponent,
    AccordionComponent, AccordionItemComponent, DetailsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    HttpClientModule,
    MglTimelineModule
  ],
  providers: [AccordionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
