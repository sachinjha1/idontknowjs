//all functions automatically get initialized with a prototype object
//__proto__ is internal property of an object, pointing to its prototype.

function Rectangle(length, width){
  this.length = length;
  this.width = width;
}


var rect1 = new Rectangle(15,30);

//rect1 is object returned as per 'this' in rectangle function
//rect1 is an object thats why it will have __proto__ which points to
//empty object (which is prototype of reactangle function)
console.log(new rect1.__proto__.constructor(1,3));
//.constructor is property of prototype to show the function (prototype property is alwways on a function)


//__proto__ of OBJECT
//prototype of FUNCTION
//.constructor (actually a function) of Prototype Object.. 
