(() => {
  "use strict";

  // animation / wow.js
  // ==================================================
  new WOW().init();

  // header > nav
  // ==================================================

  $(function () {
    $(".hamburger").click(function () {
      $(this).toggleClass("active");

      if ($(this).hasClass("active")) {
        $(".globalMenuSp").addClass("active");
      } else {
        $(".globalMenuSp").removeClass("active");
      }
    });
  });

  // page_top
  // ==================================================
  $(function () {
    var pagetop = $("#page_top");
    // ボタン非表示
    pagetop.hide();

    // 100px スクロールしたらボタン表示
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        pagetop.fadeIn();
      } else {
        pagetop.fadeOut();
      }
    });
    pagetop.click(function () {
      $("body, html").animate({ scrollTop: 0 }, 500);
      return false;
    });
  });


  //  scroll
  // ==================================================
$(function(){
  $('a[href^="#"]').click(function(){
    let speed = 500;
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

  //  slick.js
  // ==================================================
  $(function () {
    $("#rec-slick").slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 5000,
      arrows: false,
      centerPadding: "100px",
      centerMode: true,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: 0,
            centerMode: true,
          },
        },
      ],
    });
  });
})();
