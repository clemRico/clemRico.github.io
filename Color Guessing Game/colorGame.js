var numSquares = 6;
var colors = generateRandomColors(numSquares);  // these are strings
                // remember that this is  a global variable..
var square = document.querySelectorAll(".squares");  // these are the actual color divs you shld be changing
var pickedColor = pickColor(); // in the meantime this will serve as the color you'll guess
var guessThis = document.getElementById("guessThis");
guessThis.textContent = pickedColor;
var message = document.querySelector("#message");
var h1 = document.getElementById("cBC");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
// var easyBTN = document.querySelector("#easyBTN");
// var hardBTN = document.querySelector("#hardBTN");

for(var i = 0; i<modeButtons.length; i++){
  modeButtons[i].addEventListener("click", function(){
  h1.style.backgroundColor =  "steelblue";
  modeButtons[0].classList.remove("selected");
  modeButtons[1].classList.remove("selected");
  this.classList.add("selected");
  if(this.textContent === "EASY"){
    numSquares = 3;
  }
  else {
    numSquares = 6;
  }
  reset();
  });
}


function reset(){
  resetButton.textContent = "New Colors";
  message .textContent = "";
  colors = generateRandomColors(numSquares);  // This code will always override the colors array everytime it is called..
  pickedColor = pickColor();
  guessThis.textContent = pickedColor;
  h1.style.backgroundColor =  "steelblue";
  for(var i = 0; i<square.length; i++){
    //change initial color of the squares
    if(colors[i]){
      square[i].style.display = "block";
      square[i].style.backgroundColor = colors[i];
    }
    else {
      square[i].style.display = "none";
    }


    }

}

//   // remember that items on top are global variable..
//   easyBTN.addEventListener("click", function(){
//   h1.style.backgroundColor =  "steelblue";
//   easyBTN.classList.add("selected");
//   hardBTN.classList.remove("selected");
//   numSquares = 3;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//
//   for(var i=0; i<square.length;i++){
//     if(colors[i]){ // this statement here is a boolean expression that returns true if colors[i] is not! empty
//     square[i].style.backgroundColor = colors[i];
//     }
//     else{
//     square[i].style.display = "none";
//     }
//   }
//
// });
//
//   hardBTN.addEventListener("click", function(){
//   h1.style.backgroundColor =  "steelblue";
//   hardBTN.classList.add("selected");
//   easyBTN.classList.remove("selected");
//   numSquares = 6;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//
//   for(var i=0; i<square.length;i++){
//     square[i].style.backgroundColor = colors[i];
//     square[i].style.display = "block";
//     }
// });



resetButton.addEventListener("click", function(){
  // resetButton.textContent = "New Colors";
  // message .textContent = "";
  // colors = generateRandomColors(numSquares);  // This code will always override the colors array everytime it is called..
  // pickedColor = pickColor();
  // h1.style.backgroundColor =  "steelblue";
  // for(var i = 0; i<square.length; i++){
  //   //change initial color of the squares
  //     square[i].style.backgroundColor = colors[i];
  //   }
  reset();
});


/*Below are codes you can refactor*/
  for(var i = 0; i<square.length; i++){
    //change initial color of the squares
      square[i].style.backgroundColor = colors[i];
      square[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;  // the this keyword get the backgroundColor
        //of the element where the event is listening to.
        if(pickedColor === clickedColor){
          message.textContent = "Correct";
          changeColors(clickedColor);
          h1.style.backgroundColor = clickedColor;
          resetButton.textContent = "PLAY AGAIN?";
        }
        else{

          message.textContent = "Try Again";
          this.style.backgroundColor = "#232323"; // changing the background similar to body, to make a fade effect
        }
      });
  }
function changeColors(clickedColor){
  for(var i = 0; i < square.length; i++){
    square[i].style.backgroundColor = clickedColor; // here you can see that square is declared os global
    // you then used/passed "clickedColor" as the parameter to change all the color of the square..
  }
}
function pickColor(){
var random =  Math.floor(Math.random() * colors.length);  // randomizing a number from 0-5
// since Math.random returns a floating value, we use Math.floor to get the decimal value of the result.
return colors[random];
}
function generateRandomColors(num){ // num here is constant

var arr = [];
for(var i = 0; i<num; i++){
 arr.push(randomColors());
  }
return arr;
}
function randomColors(){ //EASY BREEZY! here, you're just randomizing a number for the string rgb(255, 255, 255)
 var r = Math.floor(Math.random() * 256);
 var g = Math.floor(Math.random() * 256);
 var b = Math.floor(Math.random() * 256);
 return "rgb("+r+", "+g+", "+b+")";
}
