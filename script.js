const btn = document.querySelector(".btn-roll");
const btn2 = document.querySelector(".btn-newgame");
const btn3 = document.querySelector(".btn-hold");

const currentOne = document.querySelector(".current1-input");
const currentTwo = document.querySelector(".current2-input");

let total1 = document.querySelector(".totalplyr1");
let total2 = document.querySelector(".totalplyr2");

let targetscore = 100;

let totalsave1 = 0;
let totalsave2 = 0;
let currentsave1 = 0;
let currentsave2 = 0;

let isplayer1 = true;

const btnlis1 = btn.addEventListener("click", () => {
  let randomdicenumber1 = Math.floor(Math.random() * 6 + 1);

  let randomimagesource = "images/dice" + randomdicenumber1 + ".png";

  let randomdicenumber2 = Math.floor(Math.random() * 6 + 1);
  let randomimagesource2 = "images/dice" + randomdicenumber2 + ".png";

  const player1 = document
    .querySelectorAll("img")[0]
    .setAttribute("src", randomimagesource);
  const player2 = document
    .querySelectorAll("img")[1]
    .setAttribute("src", randomimagesource2);

  // -----------------------

  if (isplayer1) {
    currentsave1 += randomdicenumber1 + randomdicenumber2;
    currentOne.innerText = currentsave1;
  } else if (!isplayer1) {
    currentsave2 += randomdicenumber1 + randomdicenumber2;
    currentTwo.innerText = currentsave2;
  }

  if (randomdicenumber1 === 6 && randomdicenumber2=== 6) {
    isplayer1 = !isplayer1
    reset();
  } 
});

btn3.addEventListener("click", () => {
  if (isplayer1) {
    isplayer1 = false;
    totalsave1 += currentsave1;
    total1.innerText = totalsave1;
    currentsave1 = 0;
    currentOne.innerText = currentsave1;
  } else if (!isplayer1) {
    isplayer1 = true;
    totalsave2 += currentsave2;
    total2.innerText = totalsave2;
    currentsave2 = 0;
    currentTwo.innerText = currentsave2;
  } if (totalsave2 > targetscore ) {
    alert("player 1 has won")
    reset ()
  }
  else if (totalsave1 > targetscore) {
    alert("player 2 has won")
    reset ()
  }
  if (totalsave1 === 100) {
    alert("player 1 win")
    reset ()
  }
  else if (totalsave2 === 100) {
    alert ("player 2 win")
    reset ()
  }
});

btn2.addEventListener("click", () => {
  totalsave1 = 0;
  total1.innerText = 0;
  currentsave1 = 0;
  currentOne.innerText = 0;
  totalsave2 = 0;
  total2.innerText = 0;
  currentsave2 = 0;
  currentTwo.innerText = 0;
});

function reset() {
  totalsave1 = 0;
  total1.innerText = 0;
  currentsave1 = 0;
  currentOne.innerText = 0;
  totalsave2 = 0;
  total2.innerText = 0;
  currentsave2 = 0;
  currentTwo.innerText = 0;
}
