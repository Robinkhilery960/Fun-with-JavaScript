const container=document.getElementsByClassName("container");
const username=document.getElementsByClassName("username")
const email=document.getElementsByClassName("email")
const password=document.getElementsByClassName("password")
const confirm=document.getElementsByClassName("confirm")
const signup=document.getElementsByClassName("signup")
const emailError=document.getElementsByClassName("emailError")
const passwordError=document.getElementsByClassName("passwordError")
const input=document.getElementsByClassName("input");
const container1=document.getElementsByClassName("container1");

// adding event listner on signup 
signup[0].addEventListener("click",handleEmail);

 function handleEmail(){
    if((email[0].value).includes("@")){
      
    }else{ 
         
         passwordError[0].style.display="block"; 
        passwordError[0].textContent="Invalid email formate:example@gmail.com"
        setTimeout(()=>{
             
             passwordError[0].style.display="none";  
            passwordError[0].textContent="!! Password Not matched"
        },2000)  
        return;
    }
     
     handlePassword()

 }


 function handlePassword() {
    let passValue=password[0].value;
    let confirmValue=confirm[0].value;
    if(passValue==""){
        
         passwordError[0].style.display="block"; 
         passwordError[0].textContent="Please enter a password"
         setTimeout(()=>{
              
                passwordError[0].style.display="none";  
                passwordError[0].textContent="!! Password Not matched"
        },2000)   
        return;
    }

    if(passValue!==confirmValue ){
         
         passwordError[0].style.display="block"; 
        setTimeout(()=>{
            
             passwordError[0].style.display="none";  
        },2000)   
        return;
    }
    checkPassword(passValue);
  
 }


 // validation of password 
 function checkPassword(passValue){
    if(passValue.length<6){
        alert("please enter a password more than 6 character");
        return;
    }
    
    let re=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(.{6,50})$/; 
    if(re.test(passValue)){
        container[0].style.display="none";
        container1[0].style.display="flex";
    }else[
        alert(`
        Your password must have following:
        1. A digit must occur at least once.
        2. A lower case alphabet must occur at least once.
        3. An upper case alphabet that must occur at least once.
        4. Atleast 6 characters and at most 20 characters.
        `)
    ] 
 }
 


 