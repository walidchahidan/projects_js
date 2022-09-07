let body=document.body;
let btn=document.querySelector("button");
let colors=["red","green","blue","gray"];

function changeBgcolor(){
  let randomIndex=Math.floor(Math.random()*colors.length);
  body.style.backgroundColor=colors[randomIndex];
}
setInterval(changeBgcolor,3000);
btn.addEventListener("click",changeBgcolor);