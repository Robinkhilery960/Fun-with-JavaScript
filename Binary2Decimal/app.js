let input=document.getElementById("binary");
let btn=document.getElementsByClassName("btn");
let span=document.getElementsByTagName("span")
 let notAllowed=["2","3","4","5","6","7","8","9"];
btn[0].addEventListener("click",decimalToBinary)
console.log(btn);

function decimalToBinary(){ 
    let number=input.value;
    for(let value of notAllowed){
        if(String(number).includes(value)){
            alert("Only 0 and 1 are allowed as binary ")
            return;
        }
    }
    let count=0;
    let result=0;
    while(number>0){
       let quotient=Math.round(number/10);
       console.log("que",quotient);
       let remainder=Math.round(number%10);
       console.log("reamin",remainder);
       number=quotient;
       result=result+remainder*Math.pow(2, count);
       count=count+1;
    }  
     span[0].innerText=result;
} 
// decimalToBinary(1010101001);