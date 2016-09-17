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
var BarraComponent = (function () {
    function BarraComponent() {
    }
    BarraComponent = __decorate([
        core_1.Component({
            selector: 'barra-comp',
            template: "\n        <nav class=\"navbar navbar-default\">\n            <div class=\"container container-fluid\">\n                <div class=\"navbar-header\">\n                    <a class=\"navbar-brand\" href=\"#\"> My Ng-App</a>\n                </div>\n                <ul class=\"nav navbar-nav\">\n                    <li class=\"active\"><a href=\"#\"> Home <span class=\"sr-only\"> (current) </span> </a></li>\n                    <li> <a href=\"#\">About</a></li>\n                </ul>\n            </div>\n\n        </nav>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], BarraComponent);
    return BarraComponent;
}());
exports.BarraComponent = BarraComponent;
//# sourceMappingURL=barra.component.js.map