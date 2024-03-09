const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    // once we will add anything then it will go in else condition
    else{
        let li = document.createElement("li");     // It is creating one HTML element with the tag name li(document.createElement("li")) and it is storing this element in this 'li' variable
        // In this 'li' we have to add the text also. the text that we have added in the input field so in this one we are adding li.innerHTML
        li.innerHTML = inputBox.value;       //we put the value
        listcontainer.appendChild(li);      //display the li and li should be displayed under this list-container so here we added the listcontainer.appendChild(li).This li will be displayed under this listcontainer
        // We have to add one cross icon at the end of this list that can be used to delete this particular task.
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    // after adding the value "hello" we can see this hello is still displaying in this field so we have to clear this input field after adding the text.
    inputBox.value = "";
    saveData();
}

    // If we will click on this particular task it will be checked or unchecked and if we will click on this cross icon it should delete the particular task to do that we will add javascript for the click function 
listcontainer.addEventListener("click",function(e){
if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
}
else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
}
}, false); 

// Here we have added add eventlistener click so whenever we will click in the container where we have stored all tasks first it will check where we have clicked if we have clicked on LI then it should add the checked class name and if the checked class name is already there it will remove that because we have added e.target.classList.toggle from the target element if the clicked target element is Li now if the clicked target element is SPAN and if we have clicked on a span then it will delete the parent element here we are adding parentElement.remove() so the parent element is the Li element so it will remove that Li so the task will be deleted.


// When refresh the website or close the browser and open the browser again it will be disappeared so we have to store these tasks in our browser so that whenever we will open the browser again our tast list or ToDo list will be displayed as it is. so here we will create a function
function saveData(){
    localStorage.setItem("data", listcontainer.innerHTML);           // In this setItem we have to add the name which is "data" and add the value that we want to save in our browser so we have to save the entire content which is in the listcontainer so we add (listcontainer.innerHTML).whatever content is there in the listcontainer that will be stored in our browser with the name of "data" and we can display this one using localStorage.getItem("data")
}

// we have to display this data whenever we will open the website again so to do that we create one function 
function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data")    // it will give all the content stored in the browser with the name of "data" 
}  
showTask();
