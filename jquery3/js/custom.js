$(document).ready(function () {
  $('#menu li').hover(function(){
    $(this).find('ul').stop(true, true).slideToggle(400);
  }, function(){
    $(this).find('ul').stop(true, true).slideToggle(400);
  });
  //Add class
  $('#menu li').hover(function(){
    var check = $(this).children('ul').length;
    if(check > 0){
      $(this).addClass('rem_radius');
    }
  }, function(){
    $(this).removeClass('rem_radius');
  });
});