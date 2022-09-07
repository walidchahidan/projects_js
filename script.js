let input = document.querySelector("#input");
let body = document.querySelector("body");

function changeColor(event){
body.style.backgroundColor = event.target.value;
}
input.addEventListener("input", changeColor);