import {Component} from '@angular/core';
@Component({
    selector: 'footer-comp',
    template: `
    <h1 style="text-align: center;">Ng-Curso</h1>
    <div class="container">
    <div class="row">
        <div class="col-md-6 col-xs-12 col-sm-6">
            <div class="caja"></div>
        </div>
        <div class="col-md-6 col-xs-12 col-sm-6">
            <div class="caja" [ngClass]="['box']"></div>
        </div>
    </div>
    <ul>
        <li *ngFor= "let amigo of amigos">
        {{amigo}}
        </li>
    </ul>
    <ul>
        <li *ngFor= "let autor of autores; let i = index ">
        {{autor}} -- {{i}}
        </li>
    </ul>
    <div>
        <table class="table table-striped table-bordered table-hover">
            <thead>
                <th>#</th>
                <th>Nombre</th>
                <th>Paterno</th>
                <th>Teléfono</th>
                <th>Ciudad</th>
                <th>Deuda Total</th>
                <th>Fecha Nacimiento</th>
            </thead>
            <tbody>
                <tr *ngFor="let cliente of clientes; let i = index">
                    <td>{{i+1}}</td>
                    <td>{{cliente.nombre | uppercase}}</td>
                    <td>{{cliente.paterno}}</td>
                    <td>{{cliente.telefono}}</td>
                    <td>{{cliente.ciudad}}</td>
                    <td>{{cliente.deuda | currency:'VEN':true:'5.2'}}</td>
                    <td>{{cliente.fNacimiento | date:'MMM dd yyyy'}}</td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
     
    `,
    styles: [
        `
        .caja {
            width: 90%;
            height: 100px;
            background: lightblue;
            margin: 0 auto;
        }
        .box: {
            border: 1px solid powderblue;
            background: red;
        }
        `

    ]
})
export class FooterComponent {

    amigos: string[];
    autores: string[];
    clientes : Array<any>;

    constructor() {
        this.amigos = ['Juan', 'Miguel','Pedro', 'Jose'];
        this.autores = ['Edgar Allan Poe', 'Gabriel Garcia Marquez', 'Diego Rendon', 'Pablo Neruda'];
        this.clientes =[
            {nombre:'Jose', paterno:'Lopez', telefono: '1212-1922', ciudad:'Mexico',deuda:0.0007, fNacimiento:new Date(1998, 7, 25)},
            {nombre:'Maria', paterno:'Ramirez', telefono: '1212-1000', ciudad:'Mexico',deuda:12345.76, fNacimiento:new Date(1988, 3, 15)},
            {nombre:'Chabelo', paterno:'Perez', telefono: '5544-1922', ciudad:'Mexico',deuda:23568, fNacimiento:new Date(1982, 6, 5)}
        ];


    }
}