//Function declarations are hoisted, as we just saw. But function expressions are not.

printSome();

var printName = function printSome() {
    console.log( a ); // undefined

    var a = 2;
}

