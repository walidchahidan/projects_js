
let btn = document.getElementById("btn");
let input = document.querySelector("input");
let res=document.getElementById("result");
var gess=randomBetween(1,10);
  alert(gess);
var chance = 3;
btn.addEventListener("click", function () {
  
  
  while (chance > 0) {
    var nbr = Number(input.value);
    if (nbr > gess) {
      alert("plus petit");
      // res.textContent = `plus petit que ${nbr}`;
      chance--;
      // console.log(chance);
    } else if (nbr == gess) {
      alert("bravooo!!!");
      // res.textContent = `BRAVOOOOOOOOOOOOO!!!!`;
      chance = 0;
      // console.log(chance);
    } else {
      alert("plus grand");
      // res.textContent = `plus grand que ${nbr}`;
      chance--;
      // console.log(chance);
    }
  }
});
function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
   }
