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
var FooterComponent = (function () {
    function FooterComponent() {
        this.amigos = ['Juan', 'Miguel', 'Pedro', 'Jose'];
        this.autores = ['Edgar Allan Poe', 'Gabriel Garcia Marquez', 'Diego Rendon', 'Pablo Neruda'];
        this.clientes = [
            { nombre: 'Jose', paterno: 'Lopez', telefono: '1212-1922', ciudad: 'Mexico', deuda: 0.0007, fNacimiento: new Date(1998, 7, 25) },
            { nombre: 'Maria', paterno: 'Ramirez', telefono: '1212-1000', ciudad: 'Mexico', deuda: 12345.76, fNacimiento: new Date(1988, 3, 15) },
            { nombre: 'Chabelo', paterno: 'Perez', telefono: '5544-1922', ciudad: 'Mexico', deuda: 23568, fNacimiento: new Date(1982, 6, 5) }
        ];
    }
    FooterComponent = __decorate([
        core_1.Component({
            selector: 'footer-comp',
            template: "\n    <h1 style=\"text-align: center;\">Ng-Curso</h1>\n    <div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-6 col-xs-12 col-sm-6\">\n            <div class=\"caja\"></div>\n        </div>\n        <div class=\"col-md-6 col-xs-12 col-sm-6\">\n            <div class=\"caja\" [ngClass]=\"['box']\"></div>\n        </div>\n    </div>\n    <ul>\n        <li *ngFor= \"let amigo of amigos\">\n        {{amigo}}\n        </li>\n    </ul>\n    <ul>\n        <li *ngFor= \"let autor of autores; let i = index \">\n        {{autor}} -- {{i}}\n        </li>\n    </ul>\n    <div>\n        <table class=\"table table-striped table-bordered table-hover\">\n            <thead>\n                <th>#</th>\n                <th>Nombre</th>\n                <th>Paterno</th>\n                <th>Tel\u00E9fono</th>\n                <th>Ciudad</th>\n                <th>Deuda Total</th>\n                <th>Fecha Nacimiento</th>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let cliente of clientes; let i = index\">\n                    <td>{{i+1}}</td>\n                    <td>{{cliente.nombre | uppercase}}</td>\n                    <td>{{cliente.paterno}}</td>\n                    <td>{{cliente.telefono}}</td>\n                    <td>{{cliente.ciudad}}</td>\n                    <td>{{cliente.deuda | currency:'VEN':true:'5.2'}}</td>\n                    <td>{{cliente.fNacimiento | date:'MMM dd yyyy'}}</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    </div>\n     \n    ",
            styles: [
                "\n        .caja {\n            width: 90%;\n            height: 100px;\n            background: lightblue;\n            margin: 0 auto;\n        }\n        .box: {\n            border: 1px solid powderblue;\n            background: red;\n        }\n        "
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;
//# sourceMappingURL=footer.components.js.map