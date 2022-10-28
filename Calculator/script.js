// textview finding 
const textview=document.getElementsByClassName("textview");

function insert(num){
   
  textview[0].value+=num; // adding num to textview
   
  } 
  
  function equals(){
    let start=0;  // used as  start in slice function 
    let end=0;    // used as  end in slice function
    let newArr=[];  // new array containing textview as an array of string 
    let str=textview[0].value;  
    for(let i=0;i<str.length;i++){
      if(str[i]=="+" || str[i]=="-" || str[i]=="*" || str[i]=="/" || str[i]=="%"){
        end=i;   
        newArr.push(str.slice(start,end));// filling new array on basis of operator 
        newArr.push(str[i]); 
        start=i+1;
        // if  any not allowed value passed show alert  
        if(str[i+1]=="+" || str[i+1]=="-" || str[i+1]=="*" || str[i+1]=="/" || str[i+1]=="%")
          
          return alert("Please Enter Correct  Value");;
      }  
    }
    newArr.push(str.slice(start,str.length)); 
    // division perform
    while(newArr.includes("/")){ 
        let idx=newArr.lastIndexOf("/"); 
        let operationArr=newArr.splice(idx-1,3,"temp"); 
         let result=Number(operationArr[0])/ Number(operationArr[2]);
         let tempidx=newArr.lastIndexOf("temp"); 
         newArr[tempidx]=result; 
       
    } 
    // muliply perform
    while(newArr.includes("*")){
      
        let idx=newArr.lastIndexOf("*"); 
        let operationArr=newArr.splice(idx-1,3,"temp"); 
         let result=Number(operationArr[0])* Number(operationArr[2]);
         let tempidx=newArr.lastIndexOf("temp"); 
         newArr[tempidx]=result; 
    }
    // subtraction perform
    while(newArr.includes("-")){ 
        let idx=newArr.lastIndexOf("-"); 
        let operationArr=newArr.splice(idx-1,3,"temp"); 
         let result=Number(operationArr[0])- Number(operationArr[2]);
         let tempidx=newArr.lastIndexOf("temp"); 
         newArr[tempidx]=result; 
    } 
    //addition perform 
    while(newArr.includes("+")){ 
        let idx=newArr.lastIndexOf("+"); 
        let operationArr=newArr.splice(idx-1,3,"temp"); 
         let result=Number(operationArr[0])+ Number(operationArr[2]);
         let tempidx=newArr.lastIndexOf("temp"); 
         newArr[tempidx]=result; 
    }
    //percentage calcualtion
    while(newArr.includes("%")){ 
        let idx=newArr.lastIndexOf("%"); 
        let operationArr=newArr.splice(idx-1,3,"temp"); 
         let result=(Number(operationArr[2])/Number(operationArr[0]))*100;
         let tempidx=newArr.lastIndexOf("temp"); 
         newArr[tempidx]=result; 
    } 
    // showing final value to textview
    textview[0].value=newArr[0];
  }
  
  function clean(){
    // cleaning textview 
  textview[0].value='';
  }
  
  function back(){
    // backspace
    textview[0].value=textview[0].value.slice(0,textview[0].value.length-1);
  }