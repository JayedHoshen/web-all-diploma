$(document).ready(function(){
    $('table tr').each(function(i){
      if(i % 2 == 0){
        $(this).addClass('even');
      }
      else{
        $(this).addClass('odd');
      }
    });
  });


  /*var abc = jQuery.noConflict(); // using no conflict method
var n = 10;
  abc(document).ready(function(){
    abc('table tr').each(function(i){
      if(i <= n) {
        if(i % 2 == 0) {
          abc(this).addClass('even');
        }
        else{
          abc(this).addClass('odd');
        }
      }
    });
  });*/