let input = document.getElementsByTagName("input");
let btn = document.getElementById("convert-btn");
btn.addEventListener("click", convert);  


// camel case 
function convert() {
    let newValue = input[0].value;
    let wordsArr = newValue.replace(/\s+/g, " ").trim().split(" ");
    let newWordsArr = wordsArr.map((word) => {
      console.log("word", word);
      let newWord = word.replace(word[0], word[0].toUpperCase());
      return newWord;
    });

    // camel case
    show(newWordsArr, "camel-case"); 

    //pascal case
    show(newWordsArr, "pascal-case"); 

    //snake-case
    let snakeWordsArr = newValue.trim().replace(/\s+/g, "_");
    show(snakeWordsArr, "snake-case"); 

    // screaming-snake-case"
     let screamingsnakeWordsArr = newValue.trim().replace(/\s+/g, "_").toUpperCase();
    show(screamingsnakeWordsArr, "screaming-snake-case"); 

    // kebab-case
    let kebabWordsArr = newValue.trim().replace(/\s+/g, "-");
    show(kebabWordsArr, "kebab-case"); 

    //screaming-kebab-case

    let screamingWordsArr = newValue.trim().replace(/\s+/g, "-").toUpperCase();
    show(screamingWordsArr, "screaming-kebab-case"); 
  } 

  // show function 
function show(arr, name) {
  let p = document.getElementById(name);
  p.innerHTML = arr.toString().replaceAll(",", name == "pascal-case" ? "" : " ");
 
} 

 
 