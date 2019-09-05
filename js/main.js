


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
      div_after.style.opacity = "0"; //убираем картинку для слабого инета
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
(() => {
  //start function for line menu////////////
  window.addEventListener('scroll', nav_fixed);
  nav_fixed();
  function nav_fixed() {
    // up_btn();
    // window.addEventListener('resize', () => {
    //   let h_h = h.clientHeight;
    // });
    let header = document.querySelector("header .nav");
    let h = document.getElementsByTagName('header')[0];
    // var h_h = h.clientHeight;
    // // var coords = header.getBoundingClientHeight();
    // var windowHeight = document.documentElement.clientHeight;
    // let height_screen = document.documentElement.clientHeight;
    if (header.getBoundingClientRect().top <= 0) {
      header.style.position = "fixed";
      header.style.top = "0";
      header.style.zIndex = "10";
    }
    if (h.getBoundingClientRect().bottom >= 0) {
      header.style.position = "absolute";
      header.style.top = "769px";
      header.style.zIndex = "inherit";
    }

  }
  //end function for line menu////////////// 
  /////start click nav logo scroll top/////////
  // window.addEventListener('resize', () => {
  //   // if (document.documentElement.clientWidth >= 768) {
  //   logo();
  //   console.log(document.documentElement.clientWidth)
  // })
  // else {
  //   logo.stopEventPropagation;
  // }
  // })
  // function logo() {
  //   let logo = document.querySelector('header nav .logo');
  //   if (document.documentElement.clientWidth >= 768) {
  //     logo.addEventListener('click', function () {
  //       // document.body.scrollTop = document.documentElement.scrollTop = 0;      
  //       $('html,body').animate({
  //         scrollTop: 0
  //       }, 2222);
  //       return false;
  //       // $('body').scrollTop(0);//jquery     
  //     })
  //   }
  //   else {
  //     logo.addEventListener('click', logo, true)
  //   }
  // } logo();
  // if (document.scrollTop < 1111) {
  // Кнопка «Наверх/Вниз»
  // var lastScrollPosition = 0;

  // var up = document.getElementById('up');
  $('#up').click(function () {
    // if ($(document).scrollTop() > 555) {
    $('html,body').animate({
      scrollTop: 0
    }, 2222);
    return false;
    // }
  });

  $(document).scroll(function () {
    if ($(document).scrollTop() > 555) {
      $('#up').fadeIn();
      $('#up').css('bottom', "10%")
      $('#up').css('opacity', "1")
      $('#up').css('transform', "rotate(0deg)")
      // $('#up').text('Наверх');
    } else {
      $('#up').fadeIn();
      $('#up').css('bottom', "-200px")
      $('#up').css('opacity', "0")
      $('#up').css('transform', "rotate(180deg)")
    }
  });
  // var up = document.getElementById('up');

  // function up_btn() {
  //   var html = document.documentElement;
  //   var body = document.body;
  //   var scrollTop = html.scrollTop || body && body.scrollTop || 0;
  //   scrollTop -= html.clientTop; // в IE7- <html> смещён относительно (0,0)
  //   console.log(scrollTop);
  //   if (scrollTop > 2222) {
  //     up.style.display = "block";
  //     up.addEventListener('click', () => {
  //       // window.scrollTo(0, 0);
  //       $('html,body').animate({
  //         scrollTop: 0
  //       }, 2222);
  //       return false;

  //     })
  //   }
  //   else {
  //     // up.style.display = "none";
  //     console.log(scrollTop)
  //   }


  // }; up_btn();

  // alert("Текущая прокрутка: " + scrollTop);

  // }
  // if (document.documentElement.clientWidth >= 768) {
  //   let logo = document.querySelector('header nav .logo');

  //   var stepTime = 20;
  //   var docBody = document.body;
  //   var focElem = document.documentElement;

  //   var scrollAnimationStep = function (initPos, stepAmount) {
  //     var newPos = initPos - stepAmount > 0 ? initPos - stepAmount : 0;

  //     docBody.scrollTop = focElem.scrollTop = newPos;

  //     newPos && setTimeout(function () {
  //       scrollAnimationStep(newPos, stepAmount);
  //     }, stepTime);
  //   }

  //   var scrollTopAnimated = function (speed) {
  //     var topOffset = docBody.scrollTop || focElem.scrollTop;
  //     var stepAmount = topOffset;

  //     speed && (stepAmount = (topOffset * stepTime) / speed);

  //     scrollAnimationStep(topOffset, stepAmount);
  //   };
  //   logo.addEventListener('click', scrollTopAnimated(3000))
  // }  // И затем:

  // <button onclick="scrollTopAnimated(1000)">Scroll Top</button>

  /////end click nav logo scroll top/////////

})();