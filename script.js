let btn = document.getElementById("btn");
let input = document.querySelector("input");
let res = document.getElementById("result");
let ch=document.getElementById("ch");

var gess = randomBetween(1, 10);
alert(gess);
let chance = 3;
btn.addEventListener("click", function () {
  let nbr = Number(input.value);
  console.log(chance);
  
  if (chance == 0) {
    input.value="";
    input.disabled=true;
    btn.disabled=true;
    return alert("vous avez pas assès de chance vous avez perdu hahahahaha!!!");  
    
  }

  if (nbr > gess) {
    // alert("plus petit");
    res.textContent = `plus petit que ${nbr}`;
    chance--;
    ch.innerHTML=`Vous avez ${chance} chances`;
    input.value="";
    // console.log(chance);
  } else if (nbr == gess) {
    // alert("bravooo!!!");
    res.textContent = `BRAVOOOOOOOOOOOOO!!!!`;
    res.style.color="green";
    chance = 0;
    ch.textContent=`Vous avez ${chance} chances`;
    input.disabled=true;
    btn.disabled=true;
    input.value="";
    // console.log(chance);
  } else {
    // alert("plus grand");
    res.textContent = `plus grand que ${nbr}`;
    chance--;
    ch.textContent=`Vous avez ${chance} chances`;
    input.value="";
    // console.log(chance);
  }
});

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//     let btn2=document.createElement("button");
//     let content=document.createTextNode("Play Again"); 
//     let div=document.getElementsByTagName("div")[0];
// function showbtn(){
//   btn2.appendChild(content);
//   div.appendChild(btn2);
// }

// // showbtn() ;
//   input.disabled=true;
//   btn.disabled=true;
// function playagain() {
//   input.disabled=false;
//   btn.disabled=false;
// }
// playagain();