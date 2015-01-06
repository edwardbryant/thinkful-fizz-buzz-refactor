$(document).ready(function(){
    $('#user-submit').on('click', function() {
        var user_range = $('#user-range').val();
        user_range = parseInt(user_range,10);
        if (isNaN(user_range)) {
            user_range = 0;
        }
        fizzbuzz(user_range);
    });        
})
function fizzbuzz(num){
    $('#guts').text(" Counting to "+num+" ... ");
    for (var i=1;i<=num;i++){
        if (i % 3 == 0) {
            if (i % 5 == 0) {
                var x = '<span style="color:red;font-weight:bold;">fizz-buzz</span>';
            } else {
                var x = '<span style="color:red;">fizz</span>';
            }
        } else if (i % 5 == 0) {
            var x = '<span style="color:red;">buzz</span>';    
        } else {
            var x = i;
        }
        if (i == num) {
            var node = $('<span>'+x+'.</span>'); 
        } else {
            var node = $('<span>'+x+', </span>'); 
        }
        $('#guts').append(node);
    }
}