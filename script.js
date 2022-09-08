let btn = document.getElementById("btn");
let input = document.querySelector("input");
let res=document.getElementById("result");
var gess=randomBetween(1,10);
  alert(gess);

btn.addEventListener("click", function () {
  
  let chance = 3;
  while (chance > 0) {
    let nbr = input.value;
    if (nbr > gess) {
      alert("plus petit");
      chance--;
    } else if (nbr == gess) {
      alert("bravooo!!!");
      chance = 0;
    } else {
      alert("plus grand");
      chance--;
    }
  }
});
function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }