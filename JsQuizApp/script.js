const quizData = [
    {
        question: "Which built-in method calls a function for each element in the array?",
        a: "while()",
        b: "loop()",
        c: "forEach()",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "Which built-in method reverses the order of the elements of an array?",
        a: "changeOrder(order)",
        b: "reverse()",
        c: "sort(order)",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "Which of the following is a valid type of function javascript supports?",
        a: "named function",
        b: "anonymous function",
        c: "Both the above",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const  quiz=document.getElementById("quiz");
const answerEls=document.getElementsByClassName("answer");
console.log(answerEls);
const questionEl=document.getElementById("question");
const a_text=document.getElementById("a_text");
const b_text=document.getElementById("b_text");
const c_text=document.getElementById("c_text");
const d_text=document.getElementById("d_text");
const submitBtn=document.getElementById("submit");
const yourScore=document.getElementById("score")

let currentQuiz = 0
let score = 0
let questionNo=0;

 for(let answer of answerEls ){
    answer.addEventListener("click",getSelected)
 };



loadQuiz(questionNo);

function loadQuiz(questionNo) {
    // showing question with option on every call 
    questionEl.innerText=quizData[questionNo].question;
    a_text.innerText=quizData[questionNo].a;
    b_text.innerText=quizData[questionNo].b;
    c_text.innerText=quizData[questionNo].c;
    d_text.innerText=quizData[questionNo].d; 
}

 

function getSelected(answer) { 
    // selecting  answer and updating score 
    let yourAnswer=answer.currentTarget.id; 
    if(yourAnswer==quizData[questionNo].correct){
        score=score+1;
    }else{
        if(score>0){
            score=score-1;
        }
    }

}

submitBtn.addEventListener('click', () => {
    // loaing next question and hanfling edge case  ans showing your score 
    questionNo=questionNo+1;
    if(questionNo==4){
         quiz.style.display="none";
          yourScore.style.display="block"
          yourScore.innerText="Your score is  "+score;
         return;
    }
    loadQuiz(questionNo);
    for(let answer of answerEls){
         answer.checked=false;
    }
    console.log("score",score)
})