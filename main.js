var numSquares = 6;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");

var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var headBackground = document.querySelector("#headBackground");

var resetButton = document.getElementById("reset");
var easyBtn = document.getElementById('easyBtn');
var hardBtn = document.getElementById("hardBtn");


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

easyBtn.addEventListener("click", function(){
  messageDisplay.innerHTML = "";
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.innerHTML = pickedColor;
  for(var i = 0; i<squares.length; i++){
    if(colors[i]){
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    };
      headBackground.style.backgroundColor = "cyan";
  };
});

hardBtn.addEventListener("click", function(){
  messageDisplay.innerHTML = "";
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.innerHTML = pickedColor;
  for(var i = 0; i<squares.length; i++){
      squares[i].style.background = colors[i];
      squares[i].style.display = "block";
    };
    headBackground.style.backgroundColor = "cyan";
  });


resetButton.addEventListener("click", function(){
  //generate all new random Colors
  messageDisplay.innerHTML = "";
  colors = generateRandomColors(numSquares);
  //pick new random colors from the empty array
  pickedColor = pickColor();
  //change colors of the squares
  colorDisplay.innerHTML = pickedColor;
  for(i=0; i<squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
  };
  headBackground.style.backgroundColor = "cyan";
});


colorDisplay.innerHTML = pickedColor;

for(i=0; i < squares.length; i++){
  //adding starting colors
  squares[i].style.backgroundColor = colors[i];
  //adding click events
  squares[i].addEventListener("click", function(){
    //identify color of cliked square (this refers to the clicked item)
    var clickedColor = this.style.backgroundColor;
    //compare color to the picked color
    if(clickedColor === pickedColor){
      messageDisplay.innerHTML = "Correct!!!";
      resetButton.innerHTML = "Play Again?";
      changeColors(clickedColor);
      headBackground.style.backgroundColor = pickedColor;
    } else {
      this.style.backgroundColor = "#333333";
      messageDisplay.innerHTML = "Try Again!!!";
    }
  });
};

function changeColors(color){
  //loop through all squares
  for(i=0; i<squares.length; i++){
      //change each olor to the given correct color
    squares[i].style.backgroundColor = color;
  };
};

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}


function generateRandomColors(num){
  //make an emptyarray
  var arr = [];
  //repeat num times
  for(i=0; i< num; i++){
  //get random color and push into empty array
  arr.push(randomColor());
  };
  //return that array
  return arr;
};

function randomColor(){
  //pick red gree and blue from 0-255 each using math.randomColor
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  return "rgb(" + red + ", " + green + ", " + blue + ")";
};


//+++++++++EASY MODE+++++++++++++++++++++++++++++++++++++++++++++++++
