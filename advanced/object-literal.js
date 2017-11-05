"use strict"

var price = 5.99, quantity = 10;

var productView = {
        price: 7.99,
        quantity: 1,
        //calculateValue: () => this.price * this.quantity
        calculateValue(){
            return this.price * this.quantity
        }
    }
;

console.log(productView.calculateValue());