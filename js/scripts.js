$(document).ready(function(){

  $('.js-header').waypoint(function(direction) {
    $(this).toggleClass('drop-shadow', direction === 'down');
  }, {
    offset: '-50px'
  });

    $('.main-content').waypoint(function(direction) {
    $('.js-hero').toggleClass('fade-hero', direction === 'down');
  }, {
    offset: '70%'
  });

    $('.main-content').waypoint(function(){
      $(this).toggleClass('fade-contents');
    }, {
      offset: '70%'
    });

  $('.headlines h1').fitText(1.0, { minFontSize: '24px', maxFontSize: '96px' });
  $('.headlines h2').fitText(2.5, { minFontSize: '8px', maxFontSize: '28px' });


});