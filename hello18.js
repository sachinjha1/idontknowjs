//this rules
//1. default rule (whatver is calling object)
//2. Implicit rules (.call/ .apply pass object)
//3. Hard/Explicit binding ( .bind pass object)


//Explicit
function foo(){
  console.log(this.bar);
}
var obj={ bar:'bar'};
var obj2={ bar:'bar2'};
var orig = foo;
var foo = function(){orig.call(obj)};

foo();     //bar
foo.call(obj2);//bar :)
