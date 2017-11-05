"use strict"
let number = 999;

let invoice = {
    number: 111,
    process: function () {
        console.log(this.number);
    }
};

invoice.process();


//ARROW
function PersonA() {
    this.age = 0;

    setInterval(() => {
        this.age++; // |this| properly refers to the person object
    }, 1000);
}

var pa = new PersonA();
console.log('Arrow Func: ' + pa.age);

//NO ARROW
function PersonA() {
    this.age = 0;

    setInterval(function () {
        this.age++; // |this| properly refers to the person object
    }, 1000);
}

var pa = new PersonA();
console.log('NonArrow Func pa.age: ' + pa.age);
console.log('Arrow Func global age: ' + age);