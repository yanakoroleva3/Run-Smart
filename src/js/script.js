$(document).ready(function(){
    $('.carousel__inner').slick({
        adaptiveHeight: true,
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"> <img src="../icons/arrow_left.png"> </button>',
        nextArrow: '<button type="button" class="slick-next"> <img src="../icons/arrow_right.png"> </button>',
        responsive: [{
            breakpoint: 992,
            settings: {
                arrows:false,
                dots: true },
             }]
    });
  });