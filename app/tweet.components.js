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
var fav_components_1 = require('./fav.components');
var TweetComponent = (function () {
    function TweetComponent() {
    }
    __decorate([
        core_1.Input('data'), 
        __metadata('design:type', Object)
    ], TweetComponent.prototype, "data", void 0);
    TweetComponent = __decorate([
        core_1.Component({
            selector: 'tweet-comp',
            template: "\n    <div class=\"media\">\n      <div class=\"media-left\">\n        <a href=\"#\">\n          <img class=\"media-object\" src=\"{{data.imagenUrl}}\" alt=\"\">\n        </a>\n      </div>\n      <div class=\"media-body\">\n        <h4 class=\"media-heading\">Media heading\n            {{data.autor}} <span class=\"handle\">{{data.user}}</span>\n        </h4>\n        {{data.status}}\n            <div>\n                <fav-component [total-fav]=\"data.totalfavs\" [favorite]=\"data.unfav\"></fav-component>\n            </div>\n      </div>\n    </div>\n    ",
            directives: [fav_components_1.FavComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], TweetComponent);
    return TweetComponent;
}());
exports.TweetComponent = TweetComponent;
//# sourceMappingURL=tweet.components.js.map