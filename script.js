let heading=document.querySelector("h1");
let text="I am fullstack Developer";
let i=0;

function typewrite(){
    if(i<text.length){
        heading.textContent+=text.charAt(i);
        i++;
        setTimeout(typewrite,100);

    }
    else{
        setTimeout(function(){
            heading.textContent="";
            i=0;
        },2000);
        
    }
}
setInterval(typewrite,1000);