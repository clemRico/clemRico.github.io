var colors = ["rgb(255, 0, 0)",
              "rgb(255, 255, 0)",
              "rgb(0, 255, 0)",
              "rgb(0, 0, 255)",
              "rgb(0, 255, 255)",
              "rgb(255, 255, 255)"
            ];   // these are strings

var square = document.querySelectorAll(".squares");  // these are the actual color divs you shld be changing
var pickedColor = pickColor(); // in the meantime this will serve as the color you'll guess
var guessThis = document.getElementById("guessThis");
guessThis.textContent = pickedColor;
var message = document.querySelector("#message");
  for(var i = 0; i<square.length; i++){
    //change initial color of the squares
      square[i].style.backgroundColor = colors[i];
      square[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;  // the this keyword get the backgroundColor
        //of the element where the event is listening to.

        if(pickedColor === clickedColor){
          message.textContent = "Correct";
          changeColors(clickedColor);
        }
        else{

          message.textContent = "Wrong";
          this.style.backgroundColor = "#232323";
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
var random =  Math.floor(Math.random() * colors.length);
return colors[random];
}
