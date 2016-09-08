"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var item_service_1 = require('../../services/item.service');
var HomeComponent = (function () {
    // Inject Service and assign it to _itemService
    function HomeComponent(_itemService) {
        this._itemService = _itemService;
        this.items = [];
        this.defaultIcon = 'default.jpg';
        this.path = 'app/assets/img/';
        this.displayLimit = 11;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._itemService.getItems().subscribe(function (items) { return _this.items = items; }, function (error) { return _this.errorMessage = error; });
    };
    HomeComponent.prototype.loadMore = function () {
        console.log(Object.keys(this.items).length);
        this.displayLimit += 10;
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home-data',
            template: "\n  <div class=\"row items\">\n    <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3 item-container\" *ngFor=\"let item of items | slice:0:this.displayLimit; let i = index\" [@itemState]=\"'in'\" >\n      <div class=\"item\" title=\"{{item.name}}\">\n        <div class=\"info-top col-xs-4 col-sm-4 col-md-5 col-lg-6\">\n          <div class=\"col-xs-4 col-sm-4 col-md-4 counter\">{{i+1}}</div>\n          <div *ngIf=\"item.offer\" class=\"col-xs-8 col-sm-8 col-md-8 offer\">{{item.offer}}</div>\n        </div>\n        <div class=\"itemimage\" [ngStyle]=\"{'background-image': 'url(' + this.path + (this.item.image ? this.item.image : defaultIcon )+ ')'}\"></div>\n        <div class=\"info-block\">\n          <div class=\"col-md-12 name text-info\">{{item.name}} </div>\n          <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6 price text-muted\">{{item.price + ':-'}}</div>\n          <div class=\"rating\" title=\"{{item.rating}}\"><div class=\"layer\" [ngStyle]=\"{'width':(100 - (( (item.rating > 5 ? 5 : item.rating ) /5) *100))+'%'}\"></div></div>\n          \n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3 item-container\" *ngIf=\"displayLimit < items.length\">\n      <div class=\"item\" (click)=\"loadMore()\">\n        <div class=\"itemimage viewmore\"></div>\n      </div>\n    </div>\n\n  </div>\n  ",
            animations: [
                core_1.trigger('itemState', [
                    core_1.state('*', core_1.style({
                        transition: 'all 0.5s ease',
                        transform: 'scale(0.9)'
                    })),
                    core_1.transition('* => in', core_1.animate('500ms ease-out'))
                ])
            ]
        }), 
        __metadata('design:paramtypes', [item_service_1.ItemService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map