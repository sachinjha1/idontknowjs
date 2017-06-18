//IIFE

var a =3;

(function IIFEE(global) {
    var a = 2;
    setTimeout(function timeup() {
        console.log('outside a' + global.a);
        console.log('inside a' + a);
    }, 1000);
})(window);