"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DataService = void 0;
var core_1 = require("@angular/core");
var DataService = /** @class */ (function () {
    function DataService() {
        this.awards = [
            {
                id: 1,
                icon: "awards-icon-01",
                name: "Global Network of the Year",
                source: "Adweek",
                year: "2011, 2014"
            },
            {
                id: 2,
                icon: "awards-icon-02",
                name: "Most Effective Network",
                source: "Global Effie",
                year: "2011, 2014, 2015"
            },
            {
                id: 3,
                icon: "awards-icon-03",
                name: "Most Strategic Network",
                source: "WARC 100",
                year: "2014 - 2018"
            },
            {
                id: 4,
                icon: "awards-icon-04",
                name: "Network of the Year",
                source: "Cannes Festival",
                year: "2007-2011"
            },
            {
                id: 5,
                icon: "awards-icon-04",
                name: "Network of the Year",
                source: "Gunn Report",
                year: "2006 - 2017"
            },
            {
                id: 6,
                icon: "awards-icon-03",
                name: "Network of the Year",
                source: "The Big Won Report",
                year: "2014-2017"
            },
            {
                id: 7,
                icon: "awards-icon-02",
                name: "Network of the Year",
                source: "Campaign Magazine",
                year: "2011, 2015, 2017"
            },
        ];
        this.benefits = [
            {
                id: 1,
                icon: "benefits-ADP",
                name: "ADP",
                text: "Lorem ipsum dolor sit amet, solum dictas vim cu, ne his ",
                link: "cc"
            },
            {
                id: 2,
                icon: "benefits-education-benefit",
                name: "Education Benefit",
                text: "Lorem ipsum dolor sit amet, solum dictas vim cu, ne his ",
                link: "cc"
            },
            {
                id: 3,
                icon: "benefits-employee-stock",
                name: "Employee Stock",
                text: "Lorem ipsum dolor sit amet, solum dictas vim cu, ne his ",
                link: "cc"
            },
            {
                id: 4,
                icon: "benefits-fidelity",
                name: "Fidelity",
                text: "Lorem ipsum dolor sit amet, solum dictas vim cu, ne his ",
                link: "cc"
            },
            {
                id: 5,
                icon: "benefits-health-benefits",
                name: "Health Benefits",
                text: "Lorem ipsum dolor sit amet, solum dictas vim cu, ne his ",
                link: "cc"
            },
            {
                id: 6,
                icon: "benefits-new-parent",
                name: "New Parent",
                text: "Lorem ipsum dolor sit amet, solum dictas vim cu, ne his ",
                link: "cc"
            },
            {
                id: 7,
                icon: "benefits-oasys",
                name: "OASYS",
                text: "Lorem ipsum dolor sit amet, solum dictas vim cu, ne his ",
                link: "cc"
            },
            {
                id: 8,
                icon: "benefits-reach",
                name: "Reach",
                text: "Lorem ipsum dolor sit amet, solum dictas vim cu, ne his ",
                link: "cc"
            },
        ];
        this.resources = [
            {
                id: 1,
                icon: "resources-bbdo-rooms",
                name: "BBDO Rooms",
                text: "Lorem ipsum dolor sit amet, solum dictas vim cu, ne his ",
                link: "cc"
            },
            {
                id: 2,
                icon: "resources-concur-solutions",
                name: "Concur Solutions",
                text: "Lorem ipsum dolor sit amet, solum dictas vim cu, ne his ",
                link: "cc"
            },
            {
                id: 3,
                icon: "resources-corrigo",
                name: "Corrigo",
                text: "Lorem ipsum dolor sit amet, solum dictas vim cu, ne his ",
                link: "cc"
            },
            {
                id: 4,
                icon: "resources-holiday-schedule",
                name: "Holiday Schedule",
                text: "Lorem ipsum dolor sit amet, solum dictas vim cu, ne his ",
                link: "cc"
            },
            {
                id: 5,
                icon: "resources-id-tags",
                name: "ID Tags",
                text: "Lorem ipsum dolor sit amet, solum dictas vim cu, ne his ",
                link: "cc"
            },
            {
                id: 6,
                icon: "resources-paige",
                name: "Paige",
                text: "Lorem ipsum dolor sit amet, solum dictas vim cu, ne his ",
                link: "cc"
            },
            {
                id: 7,
                icon: "resources-wifi",
                name: "Wifi",
                text: "Lorem ipsum dolor sit amet, solum dictas vim cu, ne his ",
                link: "cc"
            },
        ];
        this.people = [
            {
                id: 1,
                number: "01",
                align: "align-left",
                color: "bbdo-hr-grey-01-text",
                text01: "we",
                text02: "not me ",
                text03: "oriented.",
                icon: "people-single-quote"
            },
            {
                id: 2,
                number: "02",
                align: "align-right",
                color: "bbdo-hr-white-text",
                text01: "hand",
                text02: "raiser",
                text03: "check!",
                icon: "people-single-quote"
            },
            {
                id: 3,
                number: "03",
                align: "align-left",
                color: "bbdo-hr-white-text",
                text01: "does",
                text02: " the right",
                text03: "thing.",
                icon: "people-single-quote"
            },
            {
                id: 4,
                number: "04",
                align: "align-left",
                color: "bbdo-hr-blue-03-text",
                text01: "clients",
                text02: "love",
                text03: "them.",
                icon: "people-single-quote"
            },
            {
                id: 5,
                number: "05",
                align: "align-left",
                color: "bbdo-hr-white-text",
                text01: "radiator",
                text02: "not a",
                text03: "drain.",
                icon: "people-single-quote"
            },
            {
                id: 6,
                number: "06",
                align: "align-left",
                color: "bbdo-hr-blue-02-text",
                text01: "makes",
                text02: "the work",
                text03: "better.",
                icon: "people-single-quote"
            },
            {
                id: 7,
                number: "07",
                align: "align-right",
                color: "bbdo-hr-white-text",
                text01: "always",
                text02: "bounces",
                text03: "back.",
                icon: "people-single-quote"
            },
            {
                id: 8,
                number: "08",
                align: "align-left",
                color: "bbdo-hr-white-text",
                text01: "has",
                text02: "healthy",
                text03: "paranoia.",
                icon: "people-single-quote"
            },
        ];
    }
    DataService.prototype.getAwards = function () {
        return this.awards;
    };
    DataService.prototype.getBenefits = function () {
        return this.benefits;
    };
    DataService.prototype.getResources = function () {
        return this.resources;
    };
    DataService.prototype.getPeople = function () {
        return this.people;
    };
    DataService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
