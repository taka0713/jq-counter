$(function(){

    $('#plus').click(function(){
        let count = Number($('#count').val()) + 1;
        if(count <= 10){
            $('#count').val(count);
        }
    });

    $('#minus').click(function(){
        let count = Number($('#count').val()) - 1;
        $('#count').val(count);
        if(count <= 0){
            $('#count').val(0);
        }
    });

    $('#reset').click(function(){ 
        $('#count').val(0);
    });

    $('#times').click(function(){ 
        let count = Number($('#count').val()) * 2;
        if(count <= 10){
            $('#count').val(count);
        }
    });
});