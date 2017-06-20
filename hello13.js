'use strict';
// gat arrow => passes lexical this 
function startGame(){
  this.lives = 0;
  this.addLives = function(){
    this.oneUp = setTimeout(() => {
      console.log(++this.lives)
    },2000);
  }
}


var mario = new startGame();
mario.addLives();
//console.log(game.lives);
//console.log(game.addLives)
