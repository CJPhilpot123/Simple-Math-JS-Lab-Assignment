function doMath(M){
    var x = document.getElementById("guest1");
    var y = document.getElementById("guest2");
    
    if (document.getElementById('addy').checked) {
        var result = x + y;
    }
    if (document.getElementById('multie').checked) {
        var result = x * y;
    }
    if (document.getElementById('subby').checked) {
        var result = x - y;
    }
    if (document.getElementById('dividee').checked) {
        var result = x / y;
    }
    var die = document.getElementById(M);
    die.innerText = result;
}
doMath();