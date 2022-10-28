let counter=document.getElementsByClassName("counter");
let count=0;
let run=true;
let startButton=document.getElementsByClassName("start");
let resetButton=document.getElementsByClassName("reset");
let endButton=document.getElementsByClassName("stop");


startButton[0].addEventListener("click",handleStart);
resetButton[0].addEventListener("click",handleReset);
endButton[0].addEventListener("click",handleEnd);

function handleStart(){ 
            run=true;
         let id=setInterval(()=>{ 
            count=count+1;
          counter[0].textContent=count;
          if(!run){
              clearInterval(id);
          }
         },600);  
            
      }
   
function handleReset(){
    count=0;
    counter[0].textContent=count;


}
function handleEnd(){ 
    run=false; 

}