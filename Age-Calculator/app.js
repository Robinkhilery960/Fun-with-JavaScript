// const container;
// const error;
let years=document.getElementById("years");
let months=document.getElementById("months");
let days=document.getElementById("days");
let input=document.getElementById("dob")
addEventListener("click",getAge)

function getAge(){
    
    let DOB=input.value;
    if(DOB==""){
        return;
    }
    let strArr=DOB.split("-")
    console.log(strArr)
    calcAge(...strArr)
    
}

function calcAge(year,month,day){  
    let newDate=new Date();
    let currentYear=newDate.getFullYear();
    let currentMonth=newDate.getMonth()+1;
    let currentDay=newDate.getDate();
    let ageYear=currentYear-Number(year);
    let ageMonth=Math.abs(currentMonth-Number(month));
    let ageDay=Math.abs(currentDay-Number(day));
    console.log(typeof currentDay);
    displayAge(ageYear,ageMonth,ageDay);
}

function displayAge(ageYear,ageMonth,ageDay){
    years.innerText=ageYear;
    months.innerText=ageMonth;
    days.innerText=ageDay;
    
}

