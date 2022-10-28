let text=document.getElementById("text");
let wordcount=document.getElementById("wordcount");
let charcount=document.getElementById("charcount"); 
text.addEventListener("input",handleTextarea); 

function handleTextarea(val){
    let charCount=val.currentTarget.value.length;
    let wordArr=val.currentTarget.value.trim().split(" ");
    if(wordArr[0]==""){
        wordArr.length=0;
    }
    console.log(wordArr);
    let wordCount=wordArr.length;
    wordcount.innerText=wordCount;
    charcount.innerText=charCount;
}