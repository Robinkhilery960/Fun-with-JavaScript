let canvas=document.getElementById("canvas");
let button=document.getElementById("button");


button.addEventListener("click",changeColor) ;

function changeColor(){
    let alphaNumeric="0123456789ABCDEF";
    let output="#";
    for(let i=0;i<=5;i++){
        output=output+alphaNumeric[Math.round(Math.random()*16)];
    } 
    canvas.style.backgroundColor=output;
}
