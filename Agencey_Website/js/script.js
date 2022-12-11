$(document).ready(function () {

  // Hide collapsible navbar on click
  $(".navbar-nav li a").on("click", function () {
    if (!$(this).hasClass("dropdown-toggle")) {
      $(".navbar-collapse").collapse("hide");
    }
  });

  // Navbar dropdown bg
  $(".navbar-light .navbar-toggler").on("click", function () {
    $(".navbar").toggleClass("menu-bg");
    $(".navbar").css("transition", ".4s ease");
  });

  $(".navbar-nav .nav-link").on("click", function () {
    $(".navbar").removeClass("menu-bg");
    $(".navbar").css("transition", ".4s ease");
  });

  // Smooth scrolling
  $(".nav-item a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      const hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });

  // Scroll Up
  $(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
      $(".scroll-up").fadeIn();
    } else {
      $(".scroll-up").fadeOut();
    }
  });

  $(".scroll-up").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
  });

  // Sticky menu
  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();
    if (scrolling > 700) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });

  // Get the current year for the copyright
  $("#year").text(new Date().getFullYear());

  // Slick slider: Recent posts
  $(".post-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 3000,
    arrows: true,
    prevArrow:
      '<button type="button" class="prev_arrow"><i class="far fa-angle-left"></i></button>',
    nextArrow:
      '<button type="button" class="next_arrow"><i class="far fa-angle-right"></i></button>',
    speed: 500,
    centerMode: true,
    centerPadding: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  });

  // Mixitup
  var containerEl = document.querySelector(".project-filter");
  var mixer = mixitup(containerEl);

  // VenoBox
  $(".venobox").venobox();

  // Counter-Up
  $(".counter").counterUp({
    delay: 10,
    time: 3000,
  });

  // Slick slider
  $(".class").slick({
    dots: true,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  
});
