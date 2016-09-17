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
var FavComponent = (function () {
    function FavComponent() {
        this.numFav = 0;
        this.isFav = false;
    }
    FavComponent.prototype.clickFav = function () {
        this.isFav = !this.isFav;
        if (this.isFav) {
            this.numFav++;
        }
        else {
            this.numFav--;
        }
    };
    __decorate([
        core_1.Input('total-fav'), 
        __metadata('design:type', Object)
    ], FavComponent.prototype, "numFav", void 0);
    __decorate([
        core_1.Input('favorite'), 
        __metadata('design:type', Object)
    ], FavComponent.prototype, "isFav", void 0);
    FavComponent = __decorate([
        core_1.Component({
            selector: 'fav-component',
            template: "\n        <i class=\"glyphicon glyphicon-heart\" [class.clickFav]= \"isFav\" (click)=\"clickFav()\"></i> {{numFav}}\n    ",
            styles: ["\n    .glyphicon-heart {\n        color:#ccc\n    }\n    .clickFav {\n        color:#f00\n    }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], FavComponent);
    return FavComponent;
}());
exports.FavComponent = FavComponent;
//# sourceMappingURL=fav.components.js.map