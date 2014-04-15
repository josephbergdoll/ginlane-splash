$(document).ready(function(){


  $(window).scroll(function(){
    var scrollTop = $('body').scrollTop();
    var heroHeight = $('.headlines').height();
    $('.headlines').css({'opacity':( 1 - (( scrollTop / heroHeight )*0.25))});
    $('.pencil-img').css({'opacity':( 1 - (( scrollTop / heroHeight )*0.17))});
    $('.about').css({'opacity':( (scrollTop / heroHeight)*0.2 )});
  }); 

  $('.headlines h1').fitText(1.0, { minFontSize: '24px', maxFontSize: '96px' });
  $('.headlines h2').fitText(2.5, { minFontSize: '8px', maxFontSize: '28px' });


});