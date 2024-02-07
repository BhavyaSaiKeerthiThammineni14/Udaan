$(document).ready(function(){
  window._wq = window._wq || [];
  _wq.push({ 
    id: "goezmacmht",
    options: {
      autoPlay: false,
      controlsVisibleOnLoad: false,
      endVideoBehavior: null,
      fullscreenButton: true,
      playbackRateControl: false,
      playbar: true,
      playButton: true,
      playerColor: "#5f3ca3",
      qualityControl: false,
      settingsControl: false,
      smallPlayButton: true,
      stillUrl: "https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/2046311/settings_images/ORWKq7niTMaFqQF1ksYL_file.jpg"
    }
  });
  
  $('.dancers-carousel-wrapper').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    dots: true,
    nextArrow: '<i class="fas fa-chevron-right slick-next"></i>',
    prevArrow: '<i class="fas fa-chevron-left slick-prev"></i>',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 641,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      }
    ]
  });
  
  $('.dancers-carousel-dual-wrapper').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    rows: 2,
    dots: true,
    nextArrow: '<i class="fas fa-chevron-right slick-next"></i>',
    prevArrow: '<i class="fas fa-chevron-left slick-prev"></i>',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 641,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      }
    ]
  });
});
