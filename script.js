let nbr1 = document.getElementById("nbr1");
let nbr2 = document.getElementById("nbr2");
let input = document.querySelector("input");
let res = document.getElementById("res");
let btn = document.getElementById("btn");
let rest=document.getElementById("rest");

nbr1.textContent = randomBetween(1, 10);
nbr2.textContent = randomBetween(1, 10);

var somme = Number(nbr1.textContent) + Number(nbr2.textContent);
btn.addEventListener("click", function () {
  let restart = document.getElementById("restart");
  let restbtn = document.getElementById("rest");
  let game = document.getElementById("game");
  let nbr = Number(input.value);

  console.log(nbr);
  console.log(somme);

  if (nbr == somme) {
    res.textContent = "correct";

    res.style.color = "green";
    
  } else {
    res.textContent = "incorrect";
    res.style.color = "red";
   
  }
     
    setTimeout(() => {
        restart.style.display = "block";
    game.style.display = "none";
    }, 3000);
});

let restart = document.getElementById("restart");
  let restbtn = document.getElementById("rest");
  let game = document.getElementById("game");
rest.addEventListener("click", function () {

  game.style.display = "block";
  restart.style.display = "none";
  window.location.reload();
});

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
