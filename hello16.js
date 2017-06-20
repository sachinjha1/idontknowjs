function printMyName(){
  console.log(this.name);
  return this.name;
}

var name='sachin';
printMyName(); // without using new keyword... this is function is just reference of window/global object
//in strict mode default binding this keyword refer to undefined
//in non strict mode default this keyword refers to window object

var newName = new printMyName(); //new create new object so this refers to that new object


//Default rule
//Implicit binding rule
