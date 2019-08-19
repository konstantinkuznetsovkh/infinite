


$(document).ready(function () {
  // $('.slider').bxSlider();
  // $('.sliderOurContent').bxSlider();

  // $('.tabs li').click(function () {
  //   var thisClass = this.className.slice(0, 2);
  //   console.log(thisClass)
  //   $('div.t1').hide();
  //   $('div.t2').hide();
  //   $('div.t3').hide();
  //   $('div.' + thisClass).fadeIn(500);
  //   $('.tabs li').removeClass('active');
  //   $(this).addClass('active');
  //   return false;
  // });
  // // $('li.t1').addClass('active');
  // $('li.t1').click();
});


document.addEventListener('DOMContentLoaded', () => {

  //function for header nav fixed start///////////////
  // (() => {
  //   const nav = document.querySelectorAll('nav');
  //   if (home.getBoundingClientRect().top <= 0 && home.getBoundingClientRect().bottom >= headerProd.clientHeight) {
  //     remove_li_class();
  //     add_li_class(0);
  //     // console.log("home")
  //   }

  // })();
  //function for header nav fixed END/////////////////
  (() => {
    var video = document.getElementsByTagName('video')[0];
    var btn = document.getElementById('play-btn');
    var btn_stop = document.getElementById('stop-btn');
    var div_after = document.getElementsByClassName('img_after_video_header')[0];
    // btn
    btn.addEventListener('click', () => {
      video.play();
      btn.style.display = "none";
      btn_stop.style.display = "block";
      div_after.style.display = "none";
    })
    btn_stop.addEventListener('click', () => {
      video.pause();
      btn_stop.style.display = "none";
      btn.style.display = "block";
    })

    //зацикливание видео
    if (typeof video.loop == 'boolean') { // loop supported
      video.loop = true;
    } else { // loop property not supported
      video.on('ended', function () {
        this.currentTime = 0;
        this.play();
      }, false);
    }
  })();
  $("body").on("click", "a.anchor", function () {
    var idtop = $($(this).attr("href")).offset().top;
    $('html,body').animate({
      scrollTop: idtop
    }, 2222);
    return false;
  });
  $('.tabs_v li').click(function () {
    var thisClass = this.className.slice(0, 4);
    console.log(thisClass)
    $('div.t1_v').hide();
    $('div.t2_v').hide();
    $('div.t3_v').hide();
    $('div.' + thisClass).fadeIn(500);
    $('.tabs_v li').removeClass('active');
    $(this).addClass('active');
    return false;
  });
  $('.tabs_v li.t1_v').click();

  $('.slider').bxSlider();
  $('.sliderOurContent').bxSlider({
    controls: false,
    // randomStart: true,
    pager: true,
    pagerSelector: 'links_slider__sliderOurContent',
    pagerCustom: '.links_slider__sliderOurContent',
    adaptiveHeight: false,
    // buildPager: null,
    captions: false

  });

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