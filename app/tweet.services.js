"use strict";
var TweetService = (function () {
    function TweetService() {
    }
    TweetService.prototype.getTweets = function () {
        return [
            { imagenUrl: 'http://lorempixel.com/400/200/sports/?1', autor: 'Alejandro', user: '@userAlex', status: 'Estatus1', totalfavs: 10, unfav: false },
            { imagenUrl: 'http://lorempixel.com/400/200/sports/?2', autor: 'Jose', user: '@user1', status: 'Estatus2', totalfavs: 0, unfav: true },
            { imagenUrl: 'http://lorempixel.com/400/200/sports/?3', autor: 'Pedro', user: '@user2', status: 'Estatus3', totalfavs: 20, unfav: false }
        ];
    };
    return TweetService;
}());
exports.TweetService = TweetService;
//# sourceMappingURL=tweet.services.js.map