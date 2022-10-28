const text=document.getElementById("textarea");
const timer=document.getElementsByTagName("span");
const start=document.getElementsByClassName("start");
const container=document.getElementsByClassName("container");
const container1=document.getElementsByClassName("container1");
const warning=document.getElementsByClassName("warning");

let  id;
let gap=0;
let count=0;
let called=true;//  it helps in recording  first change time 
let previousChange;
let nextChange;
let timeTaken=0;  


start[0].addEventListener("click",()=>{
    container[0].style.display="none";
    container1[0].style.display="flex";
    counter();

})

text.addEventListener("input",()=>{
    const newDate=new Date();  
        nextChange=newDate.getSeconds(); 
    // if you start typring after gap of 3 second to start timer again
    if(gap>=2){
        gap=0;
        counter();
    }
    warning[0].style.display="none";
})


function counter(){ 
    clearInterval(id);
     id=setInterval(()=>{
        const newDate=new Date();
        if(nextChange){
            count=count+1;
        }
      timer[0].innerHTML=count+" sec";
       gap=Math.abs(newDate.getSeconds()-nextChange); 
       if(gap>=2){
         clearInterval(id); 
         warning[0].style.display="block";
         warning[0].innerHTML=`You have taken  ${count} seconds till now.If you want you can type more. `;
         setTimeout(()=>{
             warning[0].style.display="none";
            },4000)
          
     }
    },1000)
}