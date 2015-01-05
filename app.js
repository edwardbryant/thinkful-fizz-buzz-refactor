
$(document).ready(function(){
    $('#guts').text(" Counting ... ");
    for (var i=1;i<=100;i++){

        if (checkForFizz(i)) {
            if (checkForBuzz(i)) {
                var x = '<span style="color:red;font-weight:bold;">fizz-buzz</span>';
            } else {
                var x = '<span style="color:red;">fizz</span>';
            }
        } else if (checkForBuzz(i)) {
            var x = '<span style="color:red;">buzz</span>';    
        } else {
            var x = i;
        }

        if (i == 100) {
            var node = $('<span>'+x+'.</span>'); 
        } else {
            var node = $('<span>'+x+', </span>'); 
        }

        $('#guts').append(node);
    }
})

function checkForFizz(num) {
    if (num % 3 == 0) {
        return true;
    } else {
        return false;
    }
}

function checkForBuzz(num) {
    if (num % 5 == 0) {
        return true;
    } else {
        return false;
    }    
}

function checkForFizzBuzz(num) {
    var a = checkForFizz(num);
    var b = checkForBuzz(num);
    if (a == true || b == true) {
        return true;
    } else {
        return false;
    }
}
