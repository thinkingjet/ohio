/*
 * Created 2014 Triangle717
 * <http://Triangle717.WordPress.com/>
 *
 * Source code licensed under The MIT License
 * <http://opensource.org/licenses/MIT/>
 *
 * Dedicated to the good folks at Rock Raiders United
 * <http://www.rockraidersunited.org/>
 */


var $timer       = $("#timer"),
    $ohio_img    = $(".ohio_img"),
    $saveScore   = $(".submit-dialog"),
    clickCount   = 0,
    audioPlayers = [];


// Initialize stopwatch
$(function() {
  "use strict";
  $timer.runner();
});


/**
 * Test for HTML5 audio compatibility, preferring MP3 audio
 * Taken from http://diveintohtml5.info/everything.html#audio-mp3
 */
var _a = document.createElement("audio");
var audioFile = (!!(_a.canPlayType && _a.canPlayType("audio/mpeg;").replace(/no/, ""))) ?
    "audio/ohio_sound.mp3" : "audio/ohio_sound.ogg";


// Start the timer only once
$ohio_img.one("click", function() {
  "use strict";
  $timer.runner("start");
});


// Trigger new ohio_sounds with each click of the ohio_img
$ohio_img.on("click", function() {
  "use strict";
  // Keep track of times the user has clicked the ohio_img
  clickCount += 1;

  // On each click of the ohio_img, trigger a ohio_sound
  var aohio_sound  = new Audio(audioFile);
  aohio_sound.loop = true;
  aohio_sound.load();
  aohio_sound.play();
  audioPlayers.push(aohio_sound);
});
