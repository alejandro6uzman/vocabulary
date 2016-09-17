"use strict";
var VocabularyService = (function () {
    function VocabularyService() {
    }
    // Get the vocabulary words
    VocabularyService.prototype.getVocabulary = function () {
        return [
            { word: 'nap', meaning: 'siesta', imageUrl: 'https://sarahockwellsmith.files.wordpress.com/2016/02/nap.jpg' },
            { word: 'early', meaning: 'temprano', imageUrl: 'https://sarahockwellsmith.files.wordpress.com/2016/02/nap.jpg' },
            { word: 'spot', meaning: 'sitio, lugar', imageUrl: 'https://sarahockwellsmith.files.wordpress.com/2016/02/nap.jpg' },
            { word: 'warming', meaning: 'calentando', imageUrl: 'https://sarahockwellsmith.files.wordpress.com/2016/02/nap.jpg' }
        ];
    };
    return VocabularyService;
}());
exports.VocabularyService = VocabularyService;
//# sourceMappingURL=vocabulary.services.js.map