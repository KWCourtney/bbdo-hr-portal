import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  awards = [
    {
      id: 1,
      icon: "awards-icon-01",
      name: "Global Network of the Year",
      source: "Adweek",
      year: "2011, 2014",
    },
    {
      id: 2,
      icon: "awards-icon-02",
      name: "Most Effective Network",
      source: "Global Effie",
      year: "2011, 2014, 2015",
    },
    {
      id: 3,
      icon: "awards-icon-03",
      name: "Most Strategic Network",
      source: "WARC 100",
      year: "2014 - 2018",
    },
    {
      id: 4,
      icon: "awards-icon-04",
      name: "Network of the Year",
      source: "Cannes Festival",
      year: "2007-2011",
    },
    {
      id: 5,
      icon: "awards-icon-04",
      name: "Network of the Year",
      source: "Gunn Report",
      year: "2006 - 2017",
    },
    {
      id: 6,
      icon: "awards-icon-03",
      name: "Network of the Year",
      source: "The Big Won Report",
      year: "2014-2017",
    },
    {
      id: 7,
      icon: "awards-icon-02",
      name: "Network of the Year",
      source: "Campaign Magazine",
      year: "2011, 2015, 2017",
    },
  ];

  quotes = [
    {id: 111, name: "zzContact 001", description: "Contact 001 des", email: "xxxc001@email.com"},
    {id: 112, name: "zzContact 002", description: "Contact 002 des", email: "xxxc002@email.com"},
    {id: 113, name: "zzContact 003", description: "Contact 003 des", email: "xxxc003@email.com"},
    {id: 114, name: "zzContact 004", description: "Contact 004 des", email: "xxxc004@email.com"}
  ];

  public getAwards():Array<{id: any, icon: any, name      : any, source: any, year: any,}>{
    return this.awards;
  }

  public getQuotes():Array<{id: any, name: any, description: any, email: any}>{
    return this.quotes;
  }

  // public createContact(contact: {id: any, name: any, description: any, email: any}){
  //   this.contacts.push(contact);
  // }
}
