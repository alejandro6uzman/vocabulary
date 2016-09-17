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
var vocabulary_services_1 = require('./vocabulary.services');
var word_component_1 = require('./word.component');
var VocabularyAppComponent = (function () {
    function VocabularyAppComponent(vocabularyServices) {
        this.vocabularyWords = vocabularyServices.getVocabulary();
        console.log("Vocabulary words", this.vocabularyWords);
        this.vocabularyWord = this.vocabularyWords[0];
        console.log("Word", this.vocabularyWord);
    }
    VocabularyAppComponent = __decorate([
        core_1.Component({
            selector: 'vocabulary',
            template: "\n        <div class=\"container\">\n            <h1>Vocabulary 3</h1>\n            <div class=\"row\">\n                <div class=\"col-sm-6 col-md-4\">\n                    <vocabulary-word [word]=\"vocabularyWord\"></vocabulary-word>    \n                    <nav aria-label=\"...\">\n                        <ul class=\"pager\">\n                            <li class=\"previous disabled\">\n                                <a href=\"#\">\n                                    <span aria-hidden=\"true\">&larr;</span> Anterior\n                                </a>\n                            </li>\n                            <li class=\"next\">\n                                <a href=\"#\">Siguiente \n                                    <span aria-hidden=\"true\">&rarr;</span>\n                                </a>\n                            </li>\n                        </ul>\n                    </nav>\n                </div>\n            </div>\n        </div>\n        ",
            directives: [word_component_1.WordComponent],
            providers: [vocabulary_services_1.VocabularyService],
        }), 
        __metadata('design:paramtypes', [vocabulary_services_1.VocabularyService])
    ], VocabularyAppComponent);
    return VocabularyAppComponent;
}());
exports.VocabularyAppComponent = VocabularyAppComponent;
//# sourceMappingURL=vocabulary.component.js.map