$(document).ready(function ($) {
  // $('.slider').bxSlider();

  $('.tabs li').click(function () {
    var thisClass = this.className.slice(0, 2);
    $('div.t1').hide();
    $('div.t2').hide();
    $('div.t3').hide();
    $('div.' + thisClass).fadeIn(500);
    $('.tabs li').removeClass('active');
    $(this).addClass('active');
    return false;
  });
  $('li.t1').click();

});



$(document).ready(function () {
  $('.slider').bxSlider();
});

// 'use strict';
function onYouTubePlayerAPIReady() {
  var playerYoutube;

  playerYoutube = new YT.Player("video-youtube__content", {
    videoId: "qFLhGq0060w",

    playerVars: {
      // 'controls': 0,
      // 'showinfo': 0,
      // 'disablekb': 1
    },
    events: {
      onReady: onYouTubePlayerReady
    }
  });
}

function onYouTubePlayerReady(event) {
  // https://developers.google.com/youtube/iframe_api_reference#Events
  var targetYoutubeVideo = event.target;
  var videoDomElem = document.getElementById(
    event.target.getIframe().getAttribute("id")
  );
  var newPlayBtn = videoDomElem.nextElementSibling;

  newPlayBtn.addEventListener("click", function (event) {
    targetYoutubeVideo.playVideo();
    this.classList.add('hidden');
    videoDomElem.classList.remove('video-youtube__content_hide-origin-play-btn');
    videoDomElem.parentNode.classList.remove('video-youtube_overlay');
  });
}

var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

/* -------------------------------------------------------------------------
   end Video Youtube
 * ------------------------------------------------------------------------- */