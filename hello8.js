//IIFE

(function test(){
    var a=2;
    if(true){
        b=99;
        console.log(b);
        var b=3; //let b=3; will cause ref error at below console.err and also var allows hoisting but let wont.
    }
    console.log(b);
})();