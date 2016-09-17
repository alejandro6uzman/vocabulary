import  {Component, Input } from '@angular/core';

@Component({
    selector: 'fav-component',
    template: `
        <i class="glyphicon glyphicon-heart" [class.clickFav]= "isFav" (click)="clickFav()"></i> {{numFav}}
    `,
    styles: [`
    .glyphicon-heart {
        color:#ccc
    }
    .clickFav {
        color:#f00
    }
    `]
})
export class FavComponent  {

    @Input('total-fav') numFav = 0;
    @Input('favorite') isFav = false;
    
    public clickFav(): void {
        this.isFav = !this.isFav;
        if (this.isFav) {
            this.numFav++;
        } else {
            this.numFav--;
        }
    }

}