/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  console.log("");
  let randomSuit = generateRandomSuit();
  //Se han agregado los . ya que aquí se están llamando a clases y es la forma de diferenciarlos.
  document.querySelector(".palos-1").innerHTML = randomSuit;
  document.querySelector(".palos-2").innerHTML = randomSuit;
  document.querySelector(".number").innerHTML = generateRandomNumber();

  let divsCorazon = document.querySelectorAll(".palos-1");
  let divsCorazon2 = document.querySelectorAll(".palos-2");
  let palo = generateRandomSuit();

  if (palo == "♥") {
    divsCorazon.forEach(divCorazon => {
      divCorazon.innerHTML = palo;
      divCorazon.style.color = "red";
    });
    divsCorazon2.forEach(divCorazon => {
      divCorazon.innerHTML = palo;
      divCorazon.style.color = "red";
    });
  }
};

//Cambiado let por const, ya que es una función
const generateRandomNumber = () => {
  let numbers = [
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
    "K"
  ];

  const indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};

const generateRandomSuit = () => {
  let suit = ["♦", "♥", "♠", "♣"];
  let indexSuit = Math.floor(Math.random() * suit.length);
  return suit[indexSuit];
};
