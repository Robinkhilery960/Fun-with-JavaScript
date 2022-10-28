const  container=document.getElementsByClassName("container");
 const  amount= document.getElementsByTagName("span");
 const  subOpen=document.getElementsByClassName("sub_open");
 const  addOpen=document.getElementsByClassName("add_open");
 const  addContainer=document.getElementsByClassName("add-container");
 const  minusContainer=document.getElementsByClassName("minus-container");
 const  addInput=document.getElementById("add_input");
 const  minusInput=document.getElementById("minus_input");
 const addBtn=document.getElementsByClassName("add_btn");
 const minusBtn=document.getElementsByClassName("minus_btn");
  let  count=0;
 addOpen[0].addEventListener("click",()=>{
        addContainer[0].style.display="flex";
        container[0].style.display="none";
 })
 subOpen[0].addEventListener("click",()=>{
        minusContainer[0].style.display="flex";
        container[0].style.display="none";
 })
 addBtn[0].addEventListener("click",()=>{
        count=count+Number(addInput.value); 
        amount[0].innerHTML=count;
        addContainer[0].style.display="none";
        container[0].style.display="flex";
        addInput.value="";
 })
 minusBtn[0].addEventListener("click",()=>{
        count=count-Number(minusInput.value);
        amount[0].innerHTML=count;
        minusContainer[0].style.display="none";
        container[0].style.display="flex";
 })
