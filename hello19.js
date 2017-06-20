//this rules
//1. default rule (whatver is calling object)
//2. Implicit rules (call/apply)
//3. Hard/Explicit binding ( .bind pass object)
//4. new


//new function steps
// 1. brand new empty object 2. object linked to diff object
// 3. brand new object bound as this keyword 4. if function does not return anything then it will return this.

//Explicit
function foo(){
  this.baz='baz';
  console.log(this.bar + '' + this.baz);
}


var bar='bar';
var baz=new foo();


//this binding order
//1. was function called with new keyword - use that object
//2. was it called with call/apply/bind (explicit binding)
//3. was function called by containing/owning object
//4. default window/global object
