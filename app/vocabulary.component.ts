import {Component} from '@angular/core';
import {VocabularyService} from './vocabulary.services';
import {WordComponent} from './word.component';
@Component({
    selector: 'vocabulary',
    template: `
        <div class="container">
            <h1>Vocabulary 5</h1>
            <div class="row">
                <div class="col-sm-8 col-md-6">
                    <vocabulary-word [word]="vocabularyWord"></vocabulary-word>    
                    <nav aria-label="...">
                        <ul class="pager">
                            <li *ngIf="index > 0" class="previous">
                                <a (click)="previous()">
                                    <span aria-hidden="true">&larr;</span> Anterior
                                </a>
                            </li>
                            <li *ngIf="index < vocabularyWords.length - 1" class="next">
                                <a (click)="next()">Siguiente 
                                    <span aria-hidden="true">&rarr;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        `,
    directives: [WordComponent],
    providers: [VocabularyService],
})
export class VocabularyAppComponent {
    index = 0;
    vocabularyWords;
    vocabularyWord;
    constructor(vocabularyServices : VocabularyService) {
        this.vocabularyWords = vocabularyServices.getVocabulary();
        this.vocabularyWord = this.vocabularyWords[this.index];
    }

    // Avanza en la siguiente palabra del vocabulario
    public next() : void {
        this.index++;
        this.vocabularyWord = this.vocabularyWords[this.index];
    }

    public previous() : void {
        this.index--;
        this.vocabularyWord = this.vocabularyWords[this.index];
    }
    
}