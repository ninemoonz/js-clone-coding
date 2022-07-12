const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const todoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";
let toDoArray = [];



function saveToDo() {
    localStorage.setItem("todos", JSON.stringify(toDoArray));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDoArray = toDoArray.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDo();
    
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    };
    toDoArray.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDo();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDoArray = parsedToDos;
    parsedToDos.forEach(paintToDo); //arrow function 
}