//IIFE

(function test(){
    var a=2;
    if(true){
        var b=3; //let b=3; will cause ref error at below console.err
    }
    console.log(b);
})();