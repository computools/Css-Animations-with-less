$(document).ready(function(){
   var formInput = $('.form-input input');

    formInput.click(function(){
        var self = $(this);
        formInput.parent().each(function(index){
           var input =  formInput.parent().eq(index);
            if(input.hasClass('animateFocus')){
                input.removeClass('animateFocus');
                input.addClass('closeFocus');
            }
        });

        self.parent().addClass('animateFocus');
        setTimeout(function(){
            formInput.parent().each(function(index){
                var input =  formInput.parent().eq(index);
                if(input.hasClass('closeFocus')){
                    input.removeClass('closeFocus');
                }
            });
        }, 1200);
    });
});