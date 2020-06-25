$('.carrocel-wraper').slick({
  
  infinite: true,
  arrows: false,
  dots: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});

function slideonlyone(thechosenone) {
     $('.livro').each(function(index) {
          if ($(this).attr("id") == thechosenone) {
               $(this).fadeIn(2000);
          }
          else {
               $(this).fadeOut(1000);
          }
     });
}


