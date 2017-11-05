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
var rect2 = new (rect1.__proto__.constructor)(10,20);


//.constructor is property of prototype to show the function (prototype property is always on a function)


//__proto__ of OBJECT
//prototype of FUNCTION
//.constructor (actually a function) of Prototype Object..

Rectangle.prototype.area = function(){
  console.log(this.length * this.width);
}

rect1.area();
rect2.area();


function Square(l){
this.length = this.width = l;
}

//Square.prototype.__proto__ =  Rectangle.prototype;
/*Object.create creates an empty object that will be in protypical chain of object passed in create()*/
Square.prototype = Object.create(Rectangle.prototype);

var sq1 = new Square(5);

sq1.area();
