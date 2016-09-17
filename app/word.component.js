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
var WordComponent = (function () {
    function WordComponent() {
    }
    __decorate([
        core_1.Input('word'), 
        __metadata('design:type', Object)
    ], WordComponent.prototype, "word", void 0);
    WordComponent = __decorate([
        core_1.Component({
            selector: 'vocabulary-word',
            template: "\n        <div class=\"thumbnail\">\n            <img [src]=\"word.imageUrl\" alt=\"...\">\n            <div class=\"caption\">\n                <h1>{{word.word}}</h1>\n                <p>\n                <button type=\"button\" class=\"btn btn-default btn-lg\" data-toggle=\"collapse\" data-target=\"#meaning1\">Translate</button>\n                <div id=\"meaning1\" class=\"collapse\">\n                    <h3>{{word.meaning}}</h3>\n                </div>\n            </div>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], WordComponent);
    return WordComponent;
}());
exports.WordComponent = WordComponent;
//# sourceMappingURL=word.component.js.map