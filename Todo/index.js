const input=document.getElementsByClassName("input");
const btn=document.getElementsByClassName("addButton");
const container=document.getElementsByClassName("container");
let flag=false;// helps in toggling edit button 
let called=0;// helps in targeting element 
btn[0].addEventListener("click",addTask);
function addTask(){ 
     called=called+1; // to gave unique id 
    const item=document.createElement("div");
    item.style.display="flex"; 
    item.setAttribute("id",called);
    item.className="item";

    //task content
    const task=document.createElement("p");   
    task.className="item_input";
    task.innerText= input[0].value;
    task.contentEditable="false";
    // clearinhg main input screen 
    input[0].value="";

    // edit button 
    const editButton=document.createElement("button");
    editButton.addEventListener("click",handleEdit);
    editButton.setAttribute("id",called);
    editButton.className="editButton";
    editButton.textContent="EDIT"

    // delete button 
    const deleteButton=document.createElement("button");
    deleteButton.addEventListener("click",handleDelete);
    deleteButton.setAttribute("id",called);
    deleteButton.className="deleteButton";
    deleteButton.textContent="DELETE"

    // appending children
    item.appendChild(task);
    item.appendChild(editButton);
    item.appendChild(deleteButton);
    container[0].appendChild(item);
} 


//delete
function handleDelete(value){
   const item=document.getElementById(value.currentTarget.id);
    item.style.display="none";
   
}


//edit 
function handleEdit(value){ 
    const item=document.getElementById(value.currentTarget.id);
    const p=item.getElementsByTagName("p");  
    if(flag==false){
        p[0].contentEditable=true; 
        flag=true;
    }else{
        p[0].contentEditable=false;  
        flag=false;
    }
}

