//function as scopes

var a =2;

function printA() {
    var a=3;

    function print() {
        console.log(a);
    }

    return print;
}

printA()();
console.log(a);