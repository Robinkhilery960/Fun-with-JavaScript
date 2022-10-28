const counter=document.getElementsByClassName("counter");
const countdown_value=document.getElementById("countdown_value")
let id;
let count;
let countCopy; 
let run=true;
const stopButton=document.getElementsByClassName("stop");
const resetButton=document.getElementsByClassName("reset"); 
const intialScreen=document.getElementsByClassName("intialscreen")
const countdownButton=document.getElementsByClassName("countdown_btn");
const container=document.getElementsByClassName("container");

countdownButton[0].addEventListener("click",handleCountdown)
stopButton[0].addEventListener("click",startAgain);
resetButton[0].addEventListener("click",handleReset); 


function handleCountdown(){ 
    // getting value from input

      count=countdown_value.value; 

      countCopy=count;// helps in reset and restart  
    intialScreen[0].style.display="none"; 
    container[0].style.display="flex";
    // if any previous call have any clearinterval running it will make that clear 
       if(id){
        clearInterval(id);
       }

     id= setInterval(()=>{   
        if(count>0){
            count=count-1;
        }else{
            run=false; 
        }
      counter[0].textContent=count; 
      if(run===false){
        clearInterval(id);
      }
      
     },600); 
     
}

// stat again 
function startAgain(){     
    handleCountdown();
    run=true;
      }
   

      // reset 
function handleReset(){ 
    count=countCopy;
    counter[0].textContent=countCopy;


}
 