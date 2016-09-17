import { Component, Input} from '@angular/core';
import {FavComponent} from './fav.components';

@Component({
    selector: 'tweet-comp',
    template: `
    <div class="media">
      <div class="media-left">
        <a href="#">
          <img class="media-object" src="{{data.imagenUrl}}" alt="">
        </a>
      </div>
      <div class="media-body">
        <h4 class="media-heading">Media heading
            {{data.autor}} <span class="handle">{{data.user}}</span>
        </h4>
        {{data.status}}
            <div>
                <fav-component [total-fav]="data.totalfavs" [favorite]="data.unfav"></fav-component>
            </div>
      </div>
    </div>
    `,
    directives:[FavComponent]
})
export class TweetComponent {
    @Input('data') data;
}