const cards=[
   {
    id:"1",
    path:"./assets/1.jpg"
   },
   {
    id:"2",
    path:"./assets/2.jpg"
   },
   {
    id:"3",
    path:"./assets/3.jpg"
   }, 
   {
    id:"3",
    path:"./assets/4.jpg"
   },
   {
    id:"5",
    path:"./assets/5.jpg"
   },
   {
    id:"1",
    path:"./assets/6.jpg"
   },
   {
    id:"7",
    path:"./assets/7.jpg"
   },
   {
    id:"8",
    path:"./assets/8.jpg"
   },
   {
    id:"9",
    path:"./assets/9.jpg"
   },
   {
    id:"10",
    path:"./assets/10.jpg"
   },
   {
    id:"11",
    path:"./assets/11.jpg"
   },
   {
    id:"12",
    path:"./assets/12.jpg"
   },
   {
    id:"13",
    path:"./assets/13.jpg"
   },
   {
    id:"9",
    path:"./assets/14.jpg"
   },
   {
    id:"15",
    path:"./assets/15.jpg"
   },
   {
    id:"16",
    path:"./assets/16.jpg"
   },
   {
    id:"10",
    path:"./assets/17.jpg"
   },
   {
    id:"15",
    path:"./assets/18.jpg"
   },
   {
    id:"19",
    path:"./assets/19.jpg"
   },
   {
    id:"20",
    path:"./assets/20.jpg"
   },
   {
    id:"21",
    path:"./assets/21.jpg"
   },
   {
    id:"11",
    path:"./assets/22.jpg"
   },
   {
    id:"8",
    path:"./assets/23.jpg"
   },
   {
    id:"21",
    path:"./assets/24.jpg"
   },
]

const container=document.getElementsByClassName("container");
const scoreEl=document.getElementsByTagName("span");
let clickCounter=0;
let prevEl;
let nextEl;
const arr=[];
let score=0;

for(const card of cards){ 
    const img=document.createElement("img");
    img.id=card.id; 
    img.style.backgroundColor="#3D2F94";
    img.src="./assets/card.webp"
    img.style.width="120px" 
    img.style.margin="10px" ;
    img.addEventListener("click",handleClick);
    container[0].appendChild(img);
}


function handleClick(event){
    const card=event.currentTarget;
    const imgPath=cards[event.currentTarget.id-1].path;
    if(arr.length<2){ 
        arr.push(card);
        if(arr.length===2){
             const img1=arr[0].id;
             const img2=arr[1].id;
             if(img1===img2){
                score=score+1;
             }
             scoreEl[0].innerHTML=score;
             console.log("score",score);
        }
    }else{
         
        for(let i=1;i>=0;i--){
            let img=arr.pop();
            img.setAttribute("src","./assets/card.webp");
        } 
        arr.push(card);
        console.log(`clickCounter ${clickCounter}`);
        clickCounter=1;
    }    
    card.setAttribute("src",imgPath); 
}