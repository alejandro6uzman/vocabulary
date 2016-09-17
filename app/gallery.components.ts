import {Component} from '@angular/core';
import {ImagenesServicio} from './images.services';
import {FavComponent} from './fav.components';
@Component ({
    selector:'gallery-comp',
    template: `
        <div class="container-fluid">
            <div class="row" >
              <div class="col-sm-2 col-md-4 col-lg-4" *ngFor="let imagen of imagenes; let i = index">
                <div class="thumbnail">
                  <img src="{{imagen.imagenUrl}}">
                  <div class="caption">
                    <h3>{{imagen.title}}</h3><fav-component [total-fav]="imagen.nuFav" [favorite]="imagen.isFav"></fav-component>
                    <p>{{imagen.status}}</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    `,
    providers:[ImagenesServicio],
    directives: [FavComponent]
})
export class GalleryComponent {
    imagenes;
    constructor(imagenesServicio : ImagenesServicio ) {
        
        this.imagenes = imagenesServicio.getImages();
        console.log(this.imagenes);
    }
}