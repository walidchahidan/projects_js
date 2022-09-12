let nbr1=document.getElementById("nbr1");
let nbr2=document.getElementById("nbr2");
let input=document.querySelector("input");
let res=document.getElementById("res");
let btn=document.getElementById("btn");

nbr1.textContent =randomBetween(1,10);
nbr2.textContent =randomBetween(1,10);

var somme=Number(nbr1.textContent) +Number(nbr2.textContent);
btn.addEventListener("click",function(){
    let nbr=Number(input.value);
    console.log(nbr);
    console.log(somme);
  if(nbr==somme){
    res.textContent="correct";
    res.style.color="green";
  }
  else{
    res.textContent="incorrect";
    res.style.color="red";
  }


})
function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }















/*let btn = document.getElementById("btn");
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
}*/