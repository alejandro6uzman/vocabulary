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
var images_services_1 = require('./images.services');
var fav_components_1 = require('./fav.components');
var GalleryComponent = (function () {
    function GalleryComponent(imagenesServicio) {
        this.imagenes = imagenesServicio.getImages();
        console.log(this.imagenes);
    }
    GalleryComponent = __decorate([
        core_1.Component({
            selector: 'gallery-comp',
            template: "\n        <div class=\"container-fluid\">\n            <div class=\"row\" >\n              <div class=\"col-sm-2 col-md-4 col-lg-4\" *ngFor=\"let imagen of imagenes; let i = index\">\n                <div class=\"thumbnail\">\n                  <img src=\"{{imagen.imagenUrl}}\">\n                  <div class=\"caption\">\n                    <h3>{{imagen.title}}</h3><fav-component [total-fav]=\"imagen.nuFav\" [favorite]=\"imagen.isFav\"></fav-component>\n                    <p>{{imagen.status}}</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n        </div>\n    ",
            providers: [images_services_1.ImagenesServicio],
            directives: [fav_components_1.FavComponent]
        }), 
        __metadata('design:paramtypes', [images_services_1.ImagenesServicio])
    ], GalleryComponent);
    return GalleryComponent;
}());
exports.GalleryComponent = GalleryComponent;
//# sourceMappingURL=gallery.components.js.map