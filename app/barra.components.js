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
var usuario_class_1 = require('./usuario.class');
var BarraComponent = (function () {
    function BarraComponent() {
        this.usuario = new usuario_class_1.Usuario(1, "Alejandro", " Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) " + " desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la " + " creación de las hojas \"Letraset\", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.", "http://lorempixel.com/400/200/");
        this.title = "Aplicación";
        this.isClicked = false;
        this.userName = "alx";
        this.isFav = false;
        this.numFav = 10;
        this.edad = 16;
        //this.opcion = 0;
    }
    BarraComponent.prototype.clickButton = function () {
        this.isClicked = !this.isClicked;
    };
    BarraComponent.prototype.clickFav = function () {
        this.isFav = !this.isFav;
        if (this.isFav) {
            this.numFav++;
        }
        else {
            this.numFav--;
        }
    };
    BarraComponent.prototype.enterEvent = function ($event) {
        if ($event.keyCode === 13) {
            console.log("Se presionó enter !!");
        }
    };
    BarraComponent.prototype.inc = function () {
        this.opcion++;
    };
    BarraComponent = __decorate([
        core_1.Component({
            selector: 'barra-comp',
            template: "\n        <nav class=\"navbar navbar-default\">\n            <div class=\"container container-fluid\">\n                <div class=\"navbar-header\">\n                    <a class=\"navbar-brand\" href=\"#\"> My Ng-App</a>\n                </div>\n                <ul class=\"nav navbar-nav\">\n                    <li class=\"active\"><a href=\"#\"> Home <span class=\"sr-only\"> (current) </span> </a></li>\n                    <li> <a href=\"#\">About</a></li>\n                    <li> <a href=\"#\">{{title}}</a></li>\n                </ul>\n            </div>\n        </nav>\n        <br>\n        <br>\n<div class=\"media\">\n  <div class=\"media-left\">\n    <a href=\"#\">\n      <img class=\"media-object\" src=\"{{usuario.imagenUrl}}\" alt=\"...\">\n    </a>\n  </div>\n  <div class=\"media-body\">\n    <h4 class=\"media-heading\">{{usuario.nombre}}</h4>\n    {{usuario.publicacion}}\n  </div>\n</div>\n<br>\n<br>\n<div>\n    <input type=\"text\" placeholder=\"Presione Enter\" (keyup)=\"enterEvent($event)\"/>\n    <input type=\"text\" placeholder=\"Nuevo usuario\" [(ngModel)] =\"userName\" />\n    <i class=\"glyphicon glyphicon-heart\" [class.clickFav]= \"isFav\" (click)=\"clickFav()\"></i>{{numFav}}\n    <input type=\"text\" placeholder=\"Opcion\" [(ngModel)] =\"opcion\" />\n</div>\n<div class=\"alert alert-danger\" *ngIf=\"userName.length == 0\">\n    <strong>Debe ingresar un nombre de usuario!!</strong>\n</div>\n\n<div [ngSwitch]=\"opcion\">\n    <div *ngSwitchWhen=\"0\"></div>\n    <div *ngSwitchWhen=\"1\">Opcion 1 seleccionada</div>\n    <div *ngSwitchCase=\"2\">Opcion 2 seleccionada</div>\n    <div *ngSwitchCase=\"3\">Opcion 3 seleccionada</div>\n    <div *ngSwitchCase=\"4\">Opcion 4 seleccionada</div>\n    <div *ngSwitchCase=\"5\">Opcion 5 seleccionada</div>\n    <div *ngSwitchDefault>Opcion no valida</div>\n</div>\n<button (click)=\"inc()\">Increment</button>\n<div class=\"alert alert-success\" role=\"alert\">Usurio actual.. {{userName}}</div>\n\n<button type=\"button\" (click)=\"clickButton()\" class=\"btn btn-success\" \n    [class.btn-lg]=\"isClicked\">Block level button\n</button>\n    ",
            styles: ["\n    .glyphicon-heart {\n        color:#ccc\n    }\n    .clickFav {\n        color:#f00\n    }\n"]
        }), 
        __metadata('design:paramtypes', [])
    ], BarraComponent);
    return BarraComponent;
}());
exports.BarraComponent = BarraComponent;
//# sourceMappingURL=barra.components.js.map