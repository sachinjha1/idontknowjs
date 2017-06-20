'use strict';
// assigned 'this' to 'that' variable so that lexical 'that' variable can be passed
function startGame(){
  this.lives = 0;
  var that = this;
  this.addLives = function(){
    this.oneUp = setTimeout(function(){
      console.log(++that.lives);
    },2000);
  }
}


var mario = new startGame();
mario.addLives();
//console.log(game.lives);
//console.log(game.addLives)
