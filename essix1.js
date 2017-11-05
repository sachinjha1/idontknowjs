
//CLONE
const human = {
  name:'Sachin',
  zip:72719
};

console.log(human);

//Its not deep clone so child objects reference could be still linked
const clonedHuman = Object.assign(human,{middlename:'kumar'});
clonedHuman.name='Rohan';

console.log(clonedHuman);


//MAP
var numbers = [1,2,3,4,5];
console.log(numbers);
//Greatest thing about fat arrow is that uses lexical this
var squaredNumbers = numbers.map((nbr) => nbr*nbr);
console.log(squaredNumbers);

//condensed property

const status = {
  isActive(){ //instead of isActive:function isActive
    return true;
  }
};

console.log(status.isActive());
