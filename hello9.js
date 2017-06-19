//Function declarations are hoisted, as we just saw. But function expressions are not.

foo();

function foo() {
    console.log( a ); // undefined

    var a = 2;
}