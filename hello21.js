//ES6 closure module pattern
function printMyName(){
  var name='sachin';
  console.log(name);
}

console.log('--1-->printMyName');
console.log(printMyName);
/*
Any time you create a function, it will automatically have a property called prototype, which will be initialized to an empty object.
*/
console.log('--2-->printMyName.prototype');
console.log(printMyName.prototype);


//---------------------------


function Dog() {
}

console.log('--3-->Dog');
console.log(Dog);

//all functions automatically get initialized with a prototype object
//__proto__ is internal property of an object, pointing to its prototype.
Dog.prototype.bark = function() {
 console.log('woof');
};
//prototype is a property of a Function object
console.log('--4-->Dog.prototype');
console.log(Dog.prototype);
var fido = new Dog();
fido.bark(); // ‘woof!’


//---------------------------


var parent = {
 foo: function() {
 console.log('bar');
 }
};

//creates child object and put parent in its prototype chain. child.__proto__ is parent
var child = Object.create( parent );
child.hasOwnProperty('foo'); // false
child.foo(); // ‘bar’

console.log('--5-->parent');
console.log(parent);

console.log('--6-->child');
console.log(child);
//all functions automatically get initialized with a prototype object
//__proto__ is internal property of an object, pointing to its prototype.
console.log('--7-->child.__proto__ which is parent itself');
console.log(child.__proto__);
//child's __proto__ is parent and executing foo() of parent
child.__proto__.foo();


/**
 * The ‘prototype’ property of any function points to the object that will be asigned as the prototype of instances created with that function when using ‘new’.
 */
