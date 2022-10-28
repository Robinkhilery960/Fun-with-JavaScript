const text = document.getElementById("text");
const btn = document.getElementById("btn");
const container = document.getElementsByClassName("container");
const container1 = document.getElementsByClassName("container1");

btn.addEventListener("click", checkPalindrome);

function checkPalindrome() {
  const str = text.value;
  let flag = true;// helips in checking palidrome 

   // checking palindrome
  let start = 0;
  let end = str.length - 1;
  while (end > start) {
    if (str[start] == str[end]) {
      start = start + 1;
      end = end - 1;
    } else {
      flag = false;
      break;
    }
  }

  container[0].style.display = "none";
  container1[0].style.display = "block";

  if (flag) {
    // if palindrome found
    let p = result();
    p.style.color = "green";
    p.innerText = "Yes!! it is a palindrome";
  } else {
    // if palindrome not found 
    let p = result();
    p.style.color = "red";
    p.innerText = "No!! it is  not a palindrome";
  }
}


function handleBtnAgain() {
  container[0].style.display = "flex";
  container1[0].style.display = "none";
  text.value = ""; 
  for (const child of container1[0].children) {
    child.style.display="none";
  }
}

// DOM manuplation  
function result() {
  const p = document.createElement("p");
  const btn_again = document.createElement("button");
  btn_again.textContent = "Check  Another";
  btn_again.addEventListener("click", handleBtnAgain);
  btn_again.className = "btn";
  container1[0].appendChild(p);
  container1[0].appendChild(btn_again); 
  return p;
}
