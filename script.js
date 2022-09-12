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















