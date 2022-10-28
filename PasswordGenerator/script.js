const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard') 
 
let count=4;
let arr=["uppercase", "lowercase", "numbers", "symbols"];
const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}



clipboardEl.addEventListener('click', () => {
    navigator.clipboard.writeText(resultEl.innerText); 
    const icon=document.getElementsByClassName("fa-clipboard");
    icon[0].style.display="none";
    const copied=document.createElement("span");
        copied.innerText="Copied";
        copied.style.fontSize="10px"; 
        clipboardEl.appendChild(copied);
    setTimeout(()=>{ 
        copied.style.display="none"
        icon[0].style.display="flex";
    },1000)
    

    
})

generateEl.addEventListener('click', () => {
    let length=lengthEl.value; 
    console.log("length",length)
    let lower=arr.includes("lowercase"); 
    let upper=arr.includes("uppercase"); 
    let number=arr.includes("numbers"); 
    let symbol=arr.includes("symbols"); 
    let result=generatePassword(lower, upper, number, symbol, length);
    resultEl.innerText=result;
    console.log(result)

})
function handleCount(val){
    if(val.target.checked==false){
        count=count-1;
       let idx= arr.indexOf(val.target.id); 
       arr.splice(idx,1);
       console.log(arr);
       console.log(idx);

    }else{
        count=count+1; 
       arr.push(val.target.id);
       console.log(arr); 
    }
    
    console.log("count",count);
}
uppercaseEl.addEventListener("click",handleCount);
lowercaseEl.addEventListener("click",handleCount);
numbersEl.addEventListener("click",handleCount);
symbolsEl.addEventListener("click",handleCount);

function generatePassword(lower, upper, number, symbol, length) {
    if(arr.length==0 ){
        alert("You have not marked any checkbox as checked");
        return;
    }
    if(length<4){
        alert("please Choose a password length  4 or greater than 4");
        return;
    }
    if(length>20){
        alert("please Choose a password length  20 or below 20");
        return;
    }
    let password="";
    let yourLength=Math.floor(length/arr.length);
    let remainder=length-arr.length*yourLength;
    let rest;
    if(lower){
        password+=getRandomLower(yourLength);
      rest=getRandomLower;
    }
    if(upper){
        password+=getRandomUpper(yourLength);
        rest=getRandomUpper;
    }
    if(number){
        password+=getRandomNumber(yourLength);
        rest=getRandomNumber;
    }
    if(symbol){
        password+=getRandomSymbol(yourLength);
        rest=getRandomSymbol;
    }
    password+=rest(remainder); 
    return password;
    
}

function getRandomLower(yourLength) {
    let yourInput=""
    let small="abcdefghijklmnopqrstuvwxyz";
    for(let i=0;i<yourLength;i++){
         yourInput=yourInput+small[Math.floor(Math.random()*26)];
    }
    return yourInput;
}

function getRandomUpper(yourLength) {
    let yourInput=""
    let capital="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(let i=0;i<yourLength;i++){
         yourInput=yourInput+capital[Math.floor(Math.random()*26)];
    } 
    return yourInput;
}

function getRandomNumber(yourLength) {
    let yourInput=""
    let numbers="0123456789";
    for(let i=0;i<yourLength;i++){
         yourInput=yourInput+numbers[Math.floor(Math.random()*10)];
    } 
    return yourInput;
}

function getRandomSymbol(yourLength) {
    let yourInput=""
    let symbols="!@#$%^&*()<>?";
    for(let i=0;i<yourLength;i++){
         yourInput=yourInput+symbols[Math.floor(Math.random()*13)];
    } 
    return yourInput;
}