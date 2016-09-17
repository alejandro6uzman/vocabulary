import {Component} from '@angular/core';
import {BarraComponent} from './barra.components';
import {FooterComponent} from './footer.components';
import {GalleryComponent} from './gallery.components';
import {TweetComponent} from './tweet.components';
import {TweetService} from './tweet.services';
@Component({
    selector: 'my-app',
    template: `
        <h1>Vocabulary 3</h1>
        <div class="row">
            <div class="col-sm-6 col-md-4">
                <nav aria-label="...">
                    <ul class="pager">
                        <li class="previous disabled">
                            <a href="#">
                                <span aria-hidden="true">&larr;</span> Anterior
                            </a>
                        </li>
                        <li class="next">
                            <a href="#">Siguiente 
                                <span aria-hidden="true">&rarr;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>


        <!--
        <div *ngFor= "let tweet of tweets">
            <tweet-comp [data]="tweet"></tweet-comp>
        </div>
        
        <gallery-comp></gallery-comp>
        <footer-comp></footer-comp>
        <barra-comp></barra-comp>
        <div class="container"></div>
        -->
        
        `,
    directives: [BarraComponent, FooterComponent, GalleryComponent,TweetComponent],
    providers: [TweetService],
})
export class AppComponent {

    tweets;
    constructor(tweetService : TweetService) {
        this.tweets = tweetService;
    }
}