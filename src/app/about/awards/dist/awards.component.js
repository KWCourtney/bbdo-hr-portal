"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AwardsComponent = void 0;
var core_1 = require("@angular/core");
var AwardsComponent = /** @class */ (function () {
    // selectedAward: any;
    function AwardsComponent(dataService) {
        this.dataService = dataService;
        this.header = 'Awards &.';
        this.header1 = 'Awards.';
        this.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolorcat cupidatat non proident.';
        this.awards = [];
    }
    AwardsComponent.prototype.ngOnInit = function () {
        this.awards = this.dataService.getAwards();
    };
    AwardsComponent = __decorate([
        core_1.Component({
            selector: 'app-awards',
            templateUrl: './awards.component.html',
            styleUrls: ['./awards.component.scss']
        })
    ], AwardsComponent);
    return AwardsComponent;
}());
exports.AwardsComponent = AwardsComponent;
