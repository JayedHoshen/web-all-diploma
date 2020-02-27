$(document).ready(function(){
    $('.tTip').hover(function(){
        // mouse hover
        var spanText = $(this).next().html();

        $('<p class="toolTip"></p>').text(spanText).appendTo('body').css('top', (event.pageY - 40) + 'px').css('left', (event.pageX + 20) + 'px').fadeIn('slow');
    }, function(){
        $('.toolTip').remove();
    }).mousemove(function(event){
        // when mouse move 
        $('.toolTip').css('top', (event.pageY - 40) + 'px').css('left', (event.pageX) + 'px');
    });

    // now validation form
    $('#reg_form').submit(function(){
        if(validateTextField('f_name', 'fnameInfo') && validateTextField('l_name', 'lnameInfo') && validateEmail('email', 'mailInfo') && validateNumber('phone','phoneInfo')){
            return true;
        }
        else{
            return false;
        }
    });
    // Name validation   
    function validateTextField(fieldName, Id){
        // if it's Not valid
        var nvalue = $('input[name=' + fieldName + ']').val();
        if(nvalue.length < 1) {
            $('#' + Id).text('Please enter any text').fadeIn();
            $('#' + Id).addClass('error');
            return false;
        }
        else if(isNaN(nvalue) == false){
            $('#' + Id).text('Please enter any text').fadeIn();
            $('#' + Id).addClass('error');
            return false;
        }
        // if it's valid
        else{
            $('input[name=' + fieldName + ']').removeClass('error');
            $('#' + Id).fadeOut();
            return true;
        }
    };
    // Email validation    
    function validateEmail(fieldName, Id){
        // testing rgular expression
        var a = $('input[name=' + fieldName + ']').val();
        var filter = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-].[a-z]{2,4}$/;
        //if it's valid email
        if(filter.test(a)) {
            //$('#' + fieldName).removeClass('error');
            $('#' + Id).fadeOut();
            $('#' + Id).removeClass('error');
            return true;
        }
        //if it's Not valid
        else{
            $('#' + Id).text('Please Type a valid e-mail address');
            $('#' + Id).addClass('error');
            return false;
        }
    };
    // Phone number validation    
    function validateNumber(fieldName, Id) {
        // if it's Not valid
        var value = $('input[name=' + fieldName + ']').val();

        if(isNaN(value)) {
            $('#' + Id).text('Only number please, no text allowed');
            $('#' + Id).addClass('error');
            return false;
        }
        else if(value < 1 || value == ''){
            $('#' + Id).text('Please fill the field').fadeIn();
            $('#' + Id).addClass('error');
            return false;
        }
        // if it's valid
        else{
            $('input= ' + fieldName + ']').removeClass('error');
            $('#' + Id).fadeOut();
            $('#' + Id).removeClass('error');
            return true;
        }
    };
});