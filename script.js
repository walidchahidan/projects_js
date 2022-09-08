let btn = document.querySelector("button");
let lst = document.getElementsByTagName("ul");
// var text=document.getElementById("txt");
let input = document.querySelector("input");

// btn.addEventListener("click",function add(){
//   const li = document.createElement("li");
//   let text=document.getElementById("txt").value;
//   const t=document.createTextNode(text);

//   li.appendChild(t);
//   document.getElementById("mylist").appendChild(li);
// })
function add() {
  const li = document.createElement("li");
  let text = document.getElementById("txt");
  // const t=document.createTextNode(text.value);

  // li.appendChild(t);
  li.textContent = text.value;
  document.getElementById("mylist").appendChild(li);
  input.value = "";
}
input.addEventListener("keypress", function (event) {
  if (event.key == "Enter") {
    if (input.value != "") {
      add(event);
    } 
    else{
      alert("ff");
    } 
  }
});
