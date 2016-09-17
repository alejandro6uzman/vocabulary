import { Component, Input} from '@angular/core';
@Component({
    selector: 'vocabulary-word',
    template: `
        <div class="thumbnail">
            <img [src]="word.imageUrl" alt="...">
            <div class="caption">
                <h1>{{word.word}}</h1>
                <p>
                <button type="button" class="btn btn-default btn-lg" data-toggle="collapse" data-target="#meaning1">Translate</button>
                <div id="meaning1" class="collapse">
                    <h3>{{word.meaning}}</h3>
                </div>
            </div>
        </div>
    `
})
export class WordComponent {
    @Input('word') word;
}