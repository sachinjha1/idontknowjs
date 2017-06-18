'use strict';
function multix(a){
    eval ('var b = a * 2');
    console.log(b);
    function run(input){
        console.log(a*input);
    }
    
    return run;
}

let multix_2 = multix(2);

multix_2(6);