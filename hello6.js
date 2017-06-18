//anonymous function vs named

(function timer() {
    var a = 2;
    setTimeout(function timeup() {
        console.log('I waited 2 seconds!!!' + a);
    }, 2000);
}());