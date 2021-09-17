import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { NgModule } from '@angular/core';
import { TabsComponent } from './contact/tabs.component';

import {AboutComponent, AccordionComponent, AccordionItemComponent, AwardsComponent,  BbdoRoomsComponent, BenefitsPayrollComponent, ContactComponent, DetailsComponent, EducationComponent, EmployeeStockComponent, FooterComponent, HeaderComponent, HistoryComponent, HolidayScheduleComponent, IdTagsComponent, HomeComponent, NewParentComponent, OasysComponent, PaigeComponent, PeopleComponent, ReachComponent, ResourcesComponent, WifiComponent} from './index';

// Service class
import {AccordionService} from './services/accordion.service';
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
    AccordionComponent, AccordionItemComponent, DetailsComponent, BbdoRoomsComponent, IdTagsComponent, PaigeComponent, OasysComponent, ReachComponent
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
