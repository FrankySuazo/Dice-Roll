const myButton = document.getElementById("btnRoll");
const myLabel1 = document.getElementById("rollNum1");
const myLabel2 = document.getElementById("rollNum2");
const myLabel3 = document.getElementById("rollNum3");

const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function () {
  randomNum1 = Math.floor(Math.random() * max) + min;
  randomNum2 = Math.floor(Math.random() * max) + min;
  randomNum3 = Math.floor(Math.random() * max) + min;
  myLabel1.textContent = randomNum1;
  myLabel2.textContent = randomNum2;
  myLabel3.textContent = randomNum3;
};
