$(function(){
    $('#plus').click(function(){
        let count = Number($('#count').val());
        count = count + 1;
        $('#count').val(count);
        if (10 <= count) {
            $('#count').val(10);
         }
    })

    $('#minus').click(function(){
        let count = Number($('#count').val());
        count = count - 1;
        $('#count').val(count);
        if (count <= 0) {
            $('#count').val(0);
         }
    })

    $('#reset').click(function(){
        $('#count').val(0);
        
    })

    $('#times').click(function(){
        let count = Number($('#count').val());
        $('#count').val(count * 2);
        
    })
});