import {Component} from '@angular/core';
import {VocabularyService} from './vocabulary.services';
import {WordComponent} from './word.component';
@Component({
    selector: 'vocabulary',
    template: `
        <div class="container">
            <h1>Vocabulary 3</h1>
            <div class="row">
                <div class="col-sm-6 col-md-4">
                    <vocabulary-word [word]="vocabularyWord"></vocabulary-word>    
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
        </div>
        `,
    directives: [WordComponent],
    providers: [VocabularyService],
})
export class VocabularyAppComponent {

    vocabularyWords;
    vocabularyWord;
    constructor(vocabularyServices : VocabularyService) {
        this.vocabularyWords = vocabularyServices.getVocabulary();
        console.log("Vocabulary words", this.vocabularyWords);
        this.vocabularyWord = this.vocabularyWords[0];
        console.log("Word", this.vocabularyWord);
        
    }
}