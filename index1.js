var oddNumber = Math.floor(Math.random() * 6) +1; 

var randomDiceImage = "dice" + oddNumber + ".png"; 

var randomImageSource = "images/" + randomDiceImage; 

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var evenNumber = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + evenNumber + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);



if (oddNumber % 2!==0 && oddNumber > evenNumber) {
  document.querySelector("h1").innerHTML = " 🚩Player 1 Wins!";
}
else if (evenNumber %2 ===0 && evenNumber > oddNumber) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw🫱🏻‍🫲🏼";
}
