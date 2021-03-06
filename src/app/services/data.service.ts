import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  awards = [
    {
      id: 1,
      icon: 'awards-icon-01',
      name: 'Global Network of the Year',
      source: 'Adweek',
      year: '2011, 2014',
    },
    {
      id: 2,
      icon: 'awards-icon-02',
      name: 'Most Effective Network',
      source: 'Global Effie',
      year: '2011, 2014, 2015',
    },
    {
      id: 3,
      icon: 'awards-icon-03',
      name: 'Most Strategic Network',
      source: 'WARC 100',
      year: '2014 - 2018',
    },
    {
      id: 4,
      icon: 'awards-icon-04',
      name: 'Network of the Year',
      source: 'Cannes Festival',
      year: '2007-2011',
    },
    {
      id: 5,
      icon: 'awards-icon-04',
      name: 'Network of the Year',
      source: 'Gunn Report',
      year: '2006 - 2017',
    },
    {
      id: 6,
      icon: 'awards-icon-03',
      name: 'Network of the Year',
      source: 'The Big Won Report',
      year: '2014-2017',
    },
    {
      id: 7,
      icon: 'awards-icon-02',
      name: 'Network of the Year',
      source: 'Campaign Magazine',
      year: '2011, 2015, 2017',
    },
  ];

  benefits = [
    {
      id: 1,
      icon: 'benefits-ADP',
      name: 'ADP',
      text: 'Lorem ipsum dolor sit amet, solum dictas vim cu, ne his ',
      link: 'https://www.adp.com/',
      target: '_blank',
    },
    {
      id: 2,
      icon: 'benefits-education-benefit',
      name: 'Education Benefit',
      text: 'Lorem ipsum dolor sit amet, solum dictas vim cu, ne his ',
      link: 'education',
      target: '_self',
    },
    {
      id: 3,
      icon: 'benefits-employee-stock',
      name: 'Employee Stock',
      text: 'Lorem ipsum dolor sit amet, solum dictas vim cu, ne his ',
      link: 'employee-stock',
      target: '_self',
    },
    {
      id: 4,
      icon: 'benefits-fidelity',
      name: 'Fidelity',
      text: 'Lorem ipsum dolor sit amet, solum dictas vim cu, ne his ',
      link: 'https://www.fidelity.com/',
      target: '_blank',
    },
    {
      id: 5,
      icon: 'benefits-health-benefits',
      name: 'Health Benefits',
      text: 'Lorem ipsum dolor sit amet, solum dictas vim cu, ne his ',
      link: 'https://www.bswift.com/',
      target: '_blank',
    },
    {
      id: 6,
      icon: 'benefits-new-parent',
      name: 'New Parent',
      text: 'Lorem ipsum dolor sit amet, solum dictas vim cu, ne his ',
      link: 'new-parent',
      target: '_self',
    },
    {
      id: 7,
      icon: 'benefits-oasys',
      name: 'OASYS',
      text: 'Lorem ipsum dolor sit amet, solum dictas vim cu, ne his ',
      link: 'oasys',
      target: '_self',
    },
    {
      id: 8,
      icon: 'benefits-reach',
      name: 'Reach',
      text: 'Lorem ipsum dolor sit amet, solum dictas vim cu, ne his ',
      link: 'reach',
      target: '_self',
    },
  ];

  holidays = [
    {
      id: 1,
      name: 'New Year\'s Day',
      day: 'Wednesday',
      date: 'January 01',
    },
    {
      id: 2,
      name: 'MLK Jr Day',
      day: 'Monday',
      date: 'January 20',
    },
    {
      id: 3,
      name: 'President\'s Day',
      day: 'Monday',
      date: 'February 02',
    },
    {
      id: 4,
      name: 'Good Friday',
      day: 'Friday',
      date: 'April 10',
    },
    {
      id: 5,
      name: 'Memorial Day',
      day: 'Monday',
      date: 'May 25',
    },
    {
      id: 6,
      name: 'Independence Day',
      day: 'Wednesday',
      date: 'July 04',
    },
    {
      id: 7,
      name: 'Labor Day',
      day: 'Monday',
      date: 'September 05',
    },
    {
      id: 8,
      name: 'Thanksgiving',
      day: 'Thursday + Friday',
      date: 'November 24 + 25',
    },
    {
      id: 9,
      name: 'Holiday Break',
      day: 'Wednesday - Friday',
      date: 'December 24 -31',
    },
  ];

  resources = [
    {
      id: 1,
      icon: 'resources-bbdo-rooms',
      name: 'BBDO Rooms',
      text: 'Lorem ipsum dolor sit amet, solum dictas vim cu, ne his ',
      link: 'bbdo-rooms',
      target: '_self',
    },
    {
      id: 2,
      icon: 'resources-concur-solutions',
      name: 'Concur Solutions',
      text: 'Lorem ipsum dolor sit amet, solum dictas vim cu, ne his ',
      link: 'https://www.concursolutions.com/',
      target: '_blank',
    },
    {
      id: 3,
      icon: 'resources-corrigo',
      name: 'Corrigo',
      text: 'Lorem ipsum dolor sit amet, solum dictas vim cu, ne his ',
      link: 'https://www.jllt.com/corrigo-login/',
      target: '_blank',
    },
    {
      id: 4,
      icon: 'resources-holiday-schedule',
      name: 'Holiday Schedule',
      text: 'Lorem ipsum dolor sit amet, solum dictas vim cu, ne his ',
      link: 'holiday-schedule',
      target: '_self',
    },
    {
      id: 5,
      icon: 'resources-id-tags',
      name: 'ID Tags',
      text: 'Lorem ipsum dolor sit amet, solum dictas vim cu, ne his ',
      link: 'id-tags',
      target: '_self',
    },
    {
      id: 6,
      icon: 'resources-paige',
      name: 'Paige',
      text: 'Lorem ipsum dolor sit amet, solum dictas vim cu, ne his ',
      link: 'paige',
      target: '_self',
    },
    {
      id: 7,
      icon: 'resources-wifi',
      name: 'Wifi',
      text: 'Lorem ipsum dolor sit amet, solum dictas vim cu, ne his ',
      link: 'wifi',
      target: '_self',
    },
  ];

  people = [
    {
      id: 1,
      number: '01',
      align: 'align-left',
      color: 'bbdo-hr-grey-01-text',
      text01: 'we',
      text02: 'not me ',
      text03: 'oriented.',
      icon: 'people-single-quote',
    },
    {
      id: 2,
      number: '02',
      align: 'align-right',
      color: 'bbdo-hr-white-text',
      text01: 'hand',
      text02: 'raiser',
      text03: 'check!',
      icon: 'people-single-quote',
    },
    {
      id: 3,
      number: '03',
      align: 'align-left',
      color: 'bbdo-hr-white-text',
      text01: 'does',
      text02: ' the right',
      text03: 'thing.',
      icon: 'people-single-quote',
    },
    {
      id: 4,
      number: '04',
      align: 'align-left',
      color: 'bbdo-hr-blue-03-text',
      text01: 'clients',
      text02: 'love',
      text03: 'them.',
      icon: 'people-single-quote',
    },
    {
      id: 5,
      number: '05',
      align: 'align-left',
      color: 'bbdo-hr-white-text',
      text01: 'radiator',
      text02: 'not a',
      text03: 'drain.',
      icon: 'people-single-quote',
    },
    {
      id: 6,
      number: '06',
      align: 'align-left',
      color: 'bbdo-hr-blue-02-text',
      text01: 'makes',
      text02: 'the work',
      text03: 'better.',
      icon: 'people-single-quote',
    },
    {
      id: 7,
      number: '07',
      align: 'align-right',
      color: 'bbdo-hr-white-text',
      text01: 'always',
      text02: 'bounces',
      text03: 'back.',
      icon: 'people-single-quote',
    },
    {
      id: 8,
      number: '08',
      align: 'align-left',
      color: 'bbdo-hr-white-text',
      text01: 'has',
      text02: 'healthy',
      text03: 'paranoia.',
      icon: 'people-single-quote',
    },
  ];

  wifi = [
    {
      id: 1,
      icon: 'wifi-atlanta',
      city: 'Atlanta',
      network: 'lorem ipsum',
      networkText: 'network',
      password: 'lorem ipsum',
      passwordText: 'password',
    },
    {
      id: 2,
      icon: 'wifi-chicago',
      city: 'Chicago',
      network: 'lorem ipsum',
      networkText: 'network',
      password: 'lorem ipsum',
      passwordText: 'password',
    },
    {
      id: 1,
      icon: 'wifi-jersey-city',
      city: 'Jersey City',
      network: 'lorem ipsum',
      networkText: 'network',
      password: 'lorem ipsum',
      passwordText: 'password',
    },
    {
      id: 1,
      icon: 'wifi-los-angeles',
      city: 'Los Angeles',
      network: 'lorem ipsum',
      networkText: 'network',
      password: 'lorem ipsum',
      passwordText: 'password',
    },
    {
      id: 1,
      icon: 'wifi-nyc',
      city: 'New York',
      network: 'lorem ipsum',
      networkText: 'network',
      password: 'lorem ipsum',
      passwordText: 'password',
    },
    {
      id: 1,
      icon: 'wifi-minneapolis',
      city: 'Minneapolis',
      network: 'lorem ipsum',
      networkText: 'network',
      password: 'lorem ipsum',
      passwordText: 'password',
    },
    {
      id: 1,
      icon: 'wifi-san-francisco',
      city: 'San Fransciso',
      network: 'lorem ipsum',
      networkText: 'network',
      password: 'lorem ipsum',
      passwordText: 'password',
    },
  ];

  public getAwards():Array<{id: any, icon: any, name: any, source: any, year: any,}>{
    return this.awards;
  }

  public getBenefits():Array<{id: any, icon: any, name: any, text: any, link: any, target: any,}>{
    return this.benefits;
  }

  public getHolidays():Array<{id: any, name: any, day: any, date: any,}>{
    return this.holidays;
  }

  public getPeople():Array<{id: any, number: any, align: any, color: any, text01: any, text02: any, text03: any, icon: any,}>{
    return this.people;
  }

  public getResources():Array<{id: any, icon: any, name: any, text: any, link: any, target: any,}>{
    return this.resources;
  }

  public getWifi():Array<{id: any, icon: any, city: any, network: any, networkText: any, password: any, passwordText: any,}>{
    return this.wifi;
  }
}
