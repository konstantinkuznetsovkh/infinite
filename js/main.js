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
document.addEventListener('DOMContentLoaded', () => {
  //start pop_up_teleport/////////////////////////////////////////////////////////////////////
(() => {
  const layout = document.getElementById('pop_up_teleport'),
    div = layout.getElementsByTagName('div'),
    button = document.getElementById('button_pop_up_teleport');
  button.addEventListener('click', () => {
    layout.style.opacity = '1';
    layout.style.visibility = 'visible';
    for (let i = 0; i < div.length; i++) {
      div[i].style.opacity = '1';
    }
    setTimeout(() => {
      layout.addEventListener('click', () => {
        layout.style.opacity = '0';
        layout.style.visibility = 'hidden';
        for (let i = 0; i < div.length; i++) {
          div[i].style.opacity = '0';
        }
      });
    }, 888);
  });
})();

//start pop_up_shift/////////////////////////////////////////////////////////////////////
	(() => {
		const layout = document.getElementById('pop_up_shift'),
			div = layout.getElementsByTagName('div'),
			button = document.getElementById('button_pop_up_shift');
		button.addEventListener('click', () => {
			layout.style.opacity = '1';
			layout.style.visibility = 'visible';
			for (let i = 0; i < div.length; i++) {
				div[i].style.right = '1vw';
			}
			setTimeout(() => {
				layout.addEventListener('click', () => {
					layout.style.opacity = '0';
					layout.style.visibility = 'hidden';
					for (let i = 0; i < div.length; i++) {
						div[i].style.right = '-21vw';
					}
				});
			}, 888);
		});
	})();
	//end pop_up_shift///////////////////////////////////////////////////////////////////////
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
