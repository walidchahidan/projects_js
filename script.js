// let low=document.getElementById("low");
// let add=document.getElementById("add");
let result=document.getElementById("resultat");
var count = 0;
function add() {
    
  result.textContent = ++count;
  if(result.textContent>0){
        result.style.color="red";
    }
   zeroyellow();
}

function low() {
    result.textContent = --count;
    if(result.textContent<0){
        result.style.color="blue";
    }
    zeroyellow();
 
}
function reset(){
    
    count=0;
    result.textContent=0;
    zeroyellow();
    
    }
    function zeroyellow(){
        if(result.textContent==0){
        result.style.color="yellow";
    }
}