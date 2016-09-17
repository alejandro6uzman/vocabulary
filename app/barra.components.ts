import {Component} from '@angular/core';
import {Usuario} from './usuario.class';
@Component({
    selector: 'barra-comp',
    template: `
        <nav class="navbar navbar-default">
            <div class="container container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="#"> My Ng-App</a>
                </div>
                <ul class="nav navbar-nav">
                    <li class="active"><a href="#"> Home <span class="sr-only"> (current) </span> </a></li>
                    <li> <a href="#">About</a></li>
                    <li> <a href="#">{{title}}</a></li>
                </ul>
            </div>
        </nav>
        <br>
        <br>
<div class="media">
  <div class="media-left">
    <a href="#">
      <img class="media-object" src="{{usuario.imagenUrl}}" alt="...">
    </a>
  </div>
  <div class="media-body">
    <h4 class="media-heading">{{usuario.nombre}}</h4>
    {{usuario.publicacion}}
  </div>
</div>
<br>
<br>
<div>
    <input type="text" placeholder="Presione Enter" (keyup)="enterEvent($event)"/>
    <input type="text" placeholder="Nuevo usuario" [(ngModel)] ="userName" />
    <i class="glyphicon glyphicon-heart" [class.clickFav]= "isFav" (click)="clickFav()"></i>{{numFav}}
    <input type="text" placeholder="Opcion" [(ngModel)] ="opcion" />
</div>
<div class="alert alert-danger" *ngIf="userName.length == 0">
    <strong>Debe ingresar un nombre de usuario!!</strong>
</div>

<div [ngSwitch]="opcion">
    <div *ngSwitchWhen="0"></div>
    <div *ngSwitchWhen="1">Opcion 1 seleccionada</div>
    <div *ngSwitchCase="2">Opcion 2 seleccionada</div>
    <div *ngSwitchCase="3">Opcion 3 seleccionada</div>
    <div *ngSwitchCase="4">Opcion 4 seleccionada</div>
    <div *ngSwitchCase="5">Opcion 5 seleccionada</div>
    <div *ngSwitchDefault>Opcion no valida</div>
</div>
<button (click)="inc()">Increment</button>
<div class="alert alert-success" role="alert">Usurio actual.. {{userName}}</div>

<button type="button" (click)="clickButton()" class="btn btn-success" 
    [class.btn-lg]="isClicked">Block level button
</button>
    `
,
styles: [`
    .glyphicon-heart {
        color:#ccc
    }
    .clickFav {
        color:#f00
    }
`]    
})
export class BarraComponent 
{
    edad : number;
    userName : string;
    isClicked : boolean;
    isFav: boolean;
    numFav: number;
    opcion: number;
    usuario :Usuario = new Usuario(1,"Alejandro", " Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) " + " desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la "+" creación de las hojas \"Letraset\", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.", "http://lorempixel.com/400/200/");
    title: string;
    constructor() {
        this.title = "Aplicación";
        this.isClicked = false;
        this.userName = "alx";
        this.isFav = false;
        this.numFav = 10;
        this.edad = 16;
        //this.opcion = 0;
    }

    clickButton():void {
        this.isClicked = !this.isClicked;
    }

    public clickFav(): void {
        this.isFav = !this.isFav;
        if (this.isFav) {
            this.numFav++;
        } else {
            this.numFav--;
        }
    }

    public enterEvent($event) : void {
        if($event.keyCode === 13) {
            console.log("Se presionó enter !!");
        }
    }

    inc() {
    this.opcion++;
  }

}