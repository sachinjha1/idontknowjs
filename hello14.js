'use strict';

function Car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
}

function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}

var rohan = new Person('Rohan Jha', 6, 'M');
var eshan = new Person('Eshan Jha', 5, 'M');

var rohanCar = new Car('BMW', 'X1', 2016, rohan);
var eshanCar = new Car('Chevy', 'Camaro', 2017, eshan);

console.log(rohanCar.owner.name);
