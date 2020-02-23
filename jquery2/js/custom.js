$(document).ready(function () {
  function handlerFn(){
    $('.mypara').toggleClass('changeColor');
  };
  $('#buttonA').click(function(){
    $('.mypara').bind('click mouseenter mouseleave', handlerFn);
  });
  $('#buttonB').click(function(){
    $('.mypara').unbind('click mouseenter mouseleave', handlerFn);
  });
});


/*
$(document).ready(function(){
    $('.myheader').bind('click mouseenter mouseleave', function(){
      $(this).toggleClass('changeColor');
    });
  });
*/