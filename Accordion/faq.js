const faqData = [
  {
    id: 0,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 1,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 2,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody=document.getElementsByClassName("accordian_body");
console.log(accordianBody);
const faqs = [];

function showFaq() { 
  showFaq(); 
}


function createFaq() {
  for(let i=0;i<=2;i++){ 
    let faq=document.createElement("div");
    faq.className="faq";
    let faq_header=document.createElement("div");
    faq_header.className="faq_header"
    faq.appendChild(faq_header);
    accordianBody[0].appendChild(faq);
    let h3=document.createElement("h3");
    h3.innerText=faqData[i].question;
    faq_header.appendChild(h3);
    let button=document.createElement("button");
    let id=faqData[i].id;
    button.setAttribute("id",id);
    button.addEventListener("click",btnStatusUpdate);
    button.innerText="+" 
    button.className="show_btn";
    faq_header.appendChild(button);
    let p=document.createElement("p"); 
    p.innerText=faqData[i].answer;
    p.className="hidden";
    p.id=faqData[i].id;
    faq.appendChild(p);
  } 
}
createFaq();

function btnStatusUpdate(value) {
     let button=document.getElementsByTagName("button");
     let p=document.getElementsByTagName("p");
        let display=p[value.target.id].style.display;
         if(display=="none"){
           p[value.target.id].style.display="block";
          }else{
           p[value.target.id].style.display="none";
         }
     
}