$(document).ready(function(){

  $('.menu .dropdown').dropdown();

  $('.main-sidebar .menu a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - 150
    }, 500);
    return false;
  });


  $('.interaction-menu a').click(function(){
    $( $.attr(this, 'href') )
      .sidebar('setting', 'scrollLock', true)
      .sidebar('setting', 'transition', 'overlay')
      .sidebar('toggle');
    return false;
  });

});