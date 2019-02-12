$(document).ready(function () {

    $('.calculator').on('click', function (e) {
        var input1 = $('#number_1').val();
        var input2 = $('#number_2').val();
        var result = eval(input1+this.textContent+input2);
        var answer = $('<li>'+input1+' '+$('#'+this.id)[0].textContent+' '+input2+' = '+result+'</li>');
         
        $('#number_1').val(null);
        $('#number_2').val(null);
        answer.appendTo('#check');
    
    });
});