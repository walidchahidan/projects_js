let btn=document.querySelectorAll("button");
let input=document.getElementById("res");

function tap(){
    let res=Number(input.value);
    res+=btn.textContent;
 
}
console.log(tap());