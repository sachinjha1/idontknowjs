//Class

class Animal{
  constructor(){

  }

  animalMethod(){

  }
}

class Dog extends Animal{
  constructor(){
    super();
  }

  dogMethod(){

  }
}


//Destructuring
//ES6 code

const human = {
      firstname: 'Andy',
      lastname: 'Smith'
};

const {firstname, lastname} = human; //equivalent to var firstname = human.firstname; var lastname = human.lastname

//Destructuring with function arguments

(function({firstname, lastname}){
  console.log(`${firstname}.${lastname}`)
})(human);


//Destructuring with arrays
const kids = ['rohan','eshan'];
const [kid1, kid2] = kids;
console.log(`${kid1} brother of ${kid2}`);
