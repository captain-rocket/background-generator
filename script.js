var _ = require('lodash');

var arry = [1,2,3,4,5,6,7,8];
console.log('answer:', _.without(arry, 3));

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("button");
setGradient();

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomColor(button) {
	color1.value = getRandomColor1();
	color2.value = getRandomColor1();
	setGradient();
}

function getRandomColor1() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

button.addEventListener("click", randomColor);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);