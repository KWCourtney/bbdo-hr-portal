import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TabsComponent } from './contact/tabs.component';

import { AccordionComponent } from './ui/accordion/accordion.component';
import { AccordionItemComponent } from './ui/accordion-item/accordion-item.component';

import {AboutComponent, AwardsComponent,  BenefitsPayrollComponent, ContactComponent, EducationComponent, EmployeeStockComponent, FooterComponent, HeaderComponent, HistoryComponent, HolidayScheduleComponent, HomeComponent, NewParentComponent, PeopleComponent, ResourcesComponent, WifiComponent} from './index';

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
    AccordionComponent, AccordionItemComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [AccordionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
