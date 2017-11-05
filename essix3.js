/**
ES6 class vs Function based class
**/

// ES6 class - START
class Rectangle{
constructor(length, width){
  this.length = length;
  this.width = width;
}

area(){
    console.log(this.length*this.width);
  }

}

console.log(new Rectangle());
const rt = new Rectangle(5,20);
rt.area();
//END

// Function class - START
function RectangleF(length, width){
  this.length = length;
  this.width = width;

  this.area = function(){
    console.log(this.length*this.width);
  }

}

var newRt = new RectangleF(10,6);
newRt.area();
//END
