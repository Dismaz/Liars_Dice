//Dice 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img") [0];

image1.setAttribute("src", randomImageSource);
//

//Dice 2
var randomNumber2 = Math.floor(Math.random() *6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img") [1].setAttribute("src", randomImageSource2);
//

//Dice 3
var randomNumber3 = Math.floor(Math.random() *6) + 1;

var randomImageSource3 = "images/dice" + randomNumber3 + ".png";

document.querySelectorAll("img") [2].setAttribute("src", randomImageSource3);
//

//Dice 4
var randomNumber4 = Math.floor(Math.random() *6) + 1;

var randomImageSource4 = "images/dice" + randomNumber4 + ".png";

document.querySelectorAll("img") [3].setAttribute("src", randomImageSource4);
//

//Dice 5
var randomNumber5 = Math.floor(Math.random() *6) + 1;

var randomImageSource5 = "images/dice" + randomNumber5 + ".png";

document.querySelectorAll("img") [4].setAttribute("src", randomImageSource5);
//
