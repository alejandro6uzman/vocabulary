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
var barra_components_1 = require('./barra.components');
var footer_components_1 = require('./footer.components');
var gallery_components_1 = require('./gallery.components');
var tweet_components_1 = require('./tweet.components');
var tweet_services_1 = require('./tweet.services');
var AppComponent = (function () {
    function AppComponent(tweetService) {
        this.tweets = tweetService;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <h1>Vocabulary 3</h1>\n        <div class=\"row\">\n            <div class=\"col-sm-6 col-md-4\">\n                <nav aria-label=\"...\">\n                    <ul class=\"pager\">\n                        <li class=\"previous disabled\">\n                            <a href=\"#\">\n                                <span aria-hidden=\"true\">&larr;</span> Anterior\n                            </a>\n                        </li>\n                        <li class=\"next\">\n                            <a href=\"#\">Siguiente \n                                <span aria-hidden=\"true\">&rarr;</span>\n                            </a>\n                        </li>\n                    </ul>\n                </nav>\n            </div>\n        </div>\n\n\n        <!--\n        <div *ngFor= \"let tweet of tweets\">\n            <tweet-comp [data]=\"tweet\"></tweet-comp>\n        </div>\n        \n        <gallery-comp></gallery-comp>\n        <footer-comp></footer-comp>\n        <barra-comp></barra-comp>\n        <div class=\"container\"></div>\n        -->\n        \n        ",
            directives: [barra_components_1.BarraComponent, footer_components_1.FooterComponent, gallery_components_1.GalleryComponent, tweet_components_1.TweetComponent],
            providers: [tweet_services_1.TweetService],
        }), 
        __metadata('design:paramtypes', [tweet_services_1.TweetService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.components.js.map