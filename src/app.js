/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function randomCardGenerator() {
  let number = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "Z"
  ];
  let spade =
    '<i class="bi bi-suit-spade-fill icon-size icon-color-black"></i><br><br><br><br><br>';
  let clubs =
    '<i class="bi bi-suit-club-fill icon-size icon-color-black"></i><br><br><br><br><br>';
  let diamonds =
    '<i class="bi bi-suit-diamond-fill icon-size icon-color-red"></i><br><br><br><br><br>';
  let hearts =
    '<i class="bi bi-heart-fill icon-size icon-color-red"></i><br><br><br><br><br>';
  let jokerImage =
    '<img src="https://media.istockphoto.com/id/1330717003/vector/jester-head.jpg?s=612x612&w=0&k=20&c=4QpSNf-Eqoy0tL1IYtVuIaUrUAETU8Ak99n3cQyyqRU=" alt=""/>';
  let jokerLetter =
    "<span><strong>J</strong></span><span><strong>O</strong></span><span><strong>K</strong></span><span><strong>E</strong></span><span><strong>R</strong></span>";

  let type = [spade, clubs, diamonds, hearts];
  let typeRandom = Math.floor(Math.random() * 4);
  let numberRandom = Math.floor(Math.random() * 14);

  let CenterCard = document.getElementById("centerCard");
  let TopCard = document.getElementById("topCard");
  let BottomCard = document.getElementById("bottomCard");

  if (number[numberRandom] === "Z") {
    CenterCard.innerHTML = jokerImage;
    TopCard.innerHTML = jokerLetter;
    BottomCard.innerHTML = jokerLetter;
  } else {
    CenterCard.innerHTML = number[numberRandom];
    TopCard.innerHTML = type[typeRandom];
    BottomCard.innerHTML = type[typeRandom];
  }
}

window.onload = function() {
  randomCardGenerator();
};

let button = document.getElementById("btnCardGenerator");
button.addEventListener("click", randomCardGenerator);

setInterval(randomCardGenerator, 14000);

function changeSize() {
  let ancho = document.getElementById("inputAncho").value;
  let alto = document.getElementById("inputAlto").value;
  let size = document.getElementById("cards");
  size.style.width = ancho + "px";
  size.style.height = alto + "px";
}
let sizeCard = document.getElementById("btnSize");
sizeCard.addEventListener("click", changeSize);
