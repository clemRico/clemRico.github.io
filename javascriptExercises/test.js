var p1 = 0;
var p2 = 0;
var maxNumber = 5;
var gameOver = false;

var p1Button = document.querySelector("#p1Button");
var p1Score = document.getElementById("p1Score");


var p2Button = document.querySelector("#p2Button");
var p2Score = document.getElementById("p2Score");


var input = document.getElementById("inputField");
var winningNumber = document.getElementById("winningNumber");
var resetButton = document.getElementById("resetButton");




p1Button.addEventListener("click",function(){
if(!gameOver){
  p1++;
  p1Score.textContent = p1;

  if(p1 === maxNumber){
    p1Score.classList.add("green");
    gameOver = !gameOver;
  }
}
});

p2Button.addEventListener("click",function(){
  if(!gameOver){
    p2++;
    p2Score.textContent = p2;

    if(p2 === maxNumber){
      p2Score.classList.add("green");
      gameOver = !gameOver;
    }
  }
  });

  function reset(){
    p1 = 0;   //this is a counter
    p2 = 0;  //this is a counter
    p1Score.textContent = 0;
    p2Score.textContent = 0;
    p1Score.classList.remove("green");
    p2Score.classList.remove("green");
    gameOver = false;    // This the part where you had a problem..
    //try to use false and true next time to keep track of your boolean better
  }

input.addEventListener("change", function(){
  winningNumber.textContent = this.value; // no need to typecast here since text display lang naman sya..
  maxNumber = Number(this.value);  //Typecasting a String to a Number
  reset();
});

resetButton.addEventListener("click", function(){
reset();
});
