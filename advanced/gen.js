//setTimeout(()=>{console.log('Waited 1 ms')},0);
//[1,2,3].map((n)=>{console.log(n);})
//console.log('For loop finished');


function *three() {
    console.log('Working on 1st');
    yield 1;
    console.log('Working on 2nd');
    yield 2;
    console.log('Work done!');
    return 3;
}


var geni = three(); // calling three() didnt execute the method. It returned a generator iterator

console.log(geni.next());
console.log(geni.next());
console.log(geni.next());


for (var v of three()) {// for loop run till done is false
    console.log(v);
}





