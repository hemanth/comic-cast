'use strict';
var createPlayer = require('chromecast-player');
var xkcd = require('xkcd-imgs');

var randomComicCaster = module.exports = function() {
  var player = createPlayer();
  xkcd.img(function(err, comic){
    console.log('Fetching comic...');
    player.launch(comic.url, function(err, p) {
      console.log('Fetched the comic, casting it...');
      p.once('playing', function() {
        console.log('Comic must be on your screen!');
      });
    });
  });
};

if (require.main === module) {
  randomComicCaster();
  setInterval(randomComicCaster, 30000);
}
