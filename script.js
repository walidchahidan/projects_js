let poid=document.getElementById("weight_txt");
let long=document.getElementById("height_txt");
let btn=document.querySelector("button");
let show=document.querySelector("p");

function calculer(){
  let res=(poid.value/(long.value*long.value)).toFixed(2);
  
  alert(res);
  if(res>=18.5 && res<=25){
    // alert("Normal");
    
    show.textContent=`${res} you are Normal`;
  }
  else if(res>=25 && res<=30){
    // alert("Surpoids");
    show.textContent=`${res} you are Superpoids`;
  }
  else if(res>=30 && res<=35){
    // alert("Obésité modérée");
    show.textContent=`${res} you are Obésité modérée`;
  }
}

btn.addEventListener("click",calculer);
