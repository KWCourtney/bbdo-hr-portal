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

  benefits = [
    {
      id: 1,
      icon: "benefits-ADP",
      name: "ADP",
      text: "Lorem ipsum dolor sit amet, solum dictas vim cu, ne his ",
      link: "cc",
    },
    {
      id: 2,
      icon: "benefits-education-benefit",
      name: "Education Benefit",
      text: "Lorem ipsum dolor sit amet, solum dictas vim cu, ne his ",
      link: "cc",
    },
    {
      id: 3,
      icon: "benefits-employee-stock",
      name: "Employee Stock",
      text: "Lorem ipsum dolor sit amet, solum dictas vim cu, ne his ",
      link: "cc",
    },
    {
      id: 4,
      icon: "benefits-fidelity",
      name: "Fidelity",
      text: "Lorem ipsum dolor sit amet, solum dictas vim cu, ne his ",
      link: "cc",
    },
    {
      id: 5,
      icon: "benefits-health-benefits",
      name: "Health Benefits",
      text: "Lorem ipsum dolor sit amet, solum dictas vim cu, ne his ",
      link: "cc",
    },
    {
      id: 6,
      icon: "benefits-new-parent",
      name: "New Parent",
      text: "Lorem ipsum dolor sit amet, solum dictas vim cu, ne his ",
      link: "cc",
    },
    {
      id: 7,
      icon: "benefits-oasys",
      name: "OASYS",
      text: "Lorem ipsum dolor sit amet, solum dictas vim cu, ne his ",
      link: "cc",
    },
    {
      id: 8,
      icon: "benefits-reach",
      name: "Reach",
      text: "Lorem ipsum dolor sit amet, solum dictas vim cu, ne his ",
      link: "cc",
    },
  ];


  public getAwards():Array<{id: any, icon: any, name: any, source: any, year: any,}>{
    return this.awards;
  }

  public getBenefits():Array<{id: any, icon: any, name: any, text: any, link: any,}>{
    return this.benefits;
  }

  // public createContact(contact: {id: any, name: any, description: any, email: any}){
  //   this.contacts.push(contact);
  // }
}
